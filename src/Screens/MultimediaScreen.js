import React, { useState,useEffect, useRef  } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, Linking, Alert, Platform, ImageBackground } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ConfigService from "../Services/ConfigService";
import appStyles from '../styles/styles';
import Menu from '../components/Menu'
import Boton from './../components/Button'
import { Video, ResizeMode, Audio } from 'expo-av';
const Stack = createStackNavigator();

export default function MultimediaScreen({ navigation }) {
  const video = useRef(null);
  const [URLvideo, setVideo] = useState("")
  const [URLmusica, setMusica] = useState("");
  const [status, setStatus] = React.useState({});
  const [sound, setSound] = useState();
  const [isSoundReproducing, setIsSoundReproducing] = useState(false);

  const [fondo, setFondo] = useState("");
  useEffect(() => {
    (async () => {
      let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
      setFondo(backgroundImage.uri);
    })();
  }, []);

  useEffect(() => {
    const obtenerVideo= async () => {
      try {
        let urlVideo= await ConfigService.obtenerVideo();
        console.log("VIDEO:", urlVideo);
        setVideo(urlVideo);
      } catch (error) {
        console.error('Error al obtener y configurar la música:', error);
      }
    };
    obtenerVideo();

  }, []); 
  
  useEffect(() => {
    const obtenerMusica = async () => {
      try {
        let urlMusica = await ConfigService.obtenerMusica();
        console.log("MUSICA:", urlMusica);
        setMusica(urlMusica);
      } catch (error) {
        console.error('Error al obtener y configurar la música:', error);
      }
    };
    obtenerMusica();

  }, []); 

  let reproduceSound = async () => {
    console.log()
    if (isSoundReproducing && sound) {
      setIsSoundReproducing(false)
      console.log('Unloading Sound');
      await sound.pauseAsync();
      sound.unloadAsync();
    } else {
      setIsSoundReproducing(true);
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync({ uri: URLmusica }, { volume: 0.8 },);
      setSound(sound);
    }
  }

  let playSound = async () => {
    setIsSoundReproducing(true)
    console.log('Playing Sound');
    await sound.playAsync();
  }

  let cargarFondo = async () => {
    if (JSON.parse(await ConfigService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
      setFondo(backgroundImage.uri);
    }
  }

  useEffect(() => {
    if (sound) {
      playSound();
    }
  }, [sound]);


 useEffect(() => {
    cargarFondo();
  }, []);

  return (
    <View style={appStyles.container}>
     <ImageBackground source={{ uri: fondo }} style={appStyles.image}>
      <Text style={{ backgroundColor: 'white', fontSize: 20, width: '80%', textAlign: 'center' }}>¡Reproducí Video y Audio!</Text>
        {URLvideo ? (
          <>
            <Video
              style={styles.video}
              ref={video}
              source={{
                uri: URLvideo,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <Boton title={status.isPlaying ? 'Pausar video' : 'Reproducir video'}  onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()}  />
          </>
        ) : (
          <>
            <Text style={{ backgroundColor: 'white', fontSize: 15, width: '80%', textAlign: 'center' }}>No hay archivos disponibles</Text>
          </>
        )}
        {URLmusica ? (
          <>
            <Boton title={isSoundReproducing ? 'Pausar audio' : 'Reproducir audio'}  onPress={reproduceSound} />
          </>
        ) : (
          <>
            <Text style={{ backgroundColor: 'white', fontSize: 15, width: '80%', textAlign: 'center' }}>No hay archivos disponibles</Text>
          </>
        )}
        <Menu navigation={navigation} />
      </ImageBackground>
    </View>
  );
        }

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            backgroundColor: '#fff'
          },
          button1: {
            marginTop: 20,
            width: 300,
            height: 60,
            backgroundColor: 'green',
            borderRadius: 10
          },
          button2: {
            marginTop: 20,
            width: 300,
            height: 60,
            backgroundColor: 'blue',
            borderRadius: 10
          },
          image: {
            width: '100%',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          video: {
            width: '80%',
            height: 200
          }
        });
