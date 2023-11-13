import { View, Text, StyleSheet, SafeAreaView, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import Menu from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import ConfigService from "../Services/ConfigService";
import Boton from './../components/Button'
import { Camera, CameraType } from 'expo-camera';
import appStyles from "../styles/styles";



export default function CambioFondoScreen({ navigation }) {

  const [image, setImage] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [startCamera, setStartCamera] = useState(false)

  const elegirFoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let obj = result.assets[0];
      console.log('elegirFoto');
      console.log(obj);
      await ConfigService.guardarBackground(JSON.stringify(obj));
      //let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
      setImage(obj.uri);
      console.log(obj.uri);
    }
  };

  const abrirCamara = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status === 'granted') {
      setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
  }

  const sacarFoto = async () => {
    if (!camera) return
    const photo = await camera.takePictureAsync();
    console.log(photo);
    await ConfigService.guardarBackground(JSON.stringify(photo));
    let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
    setImage(backgroundImage.uri);
    setStartCamera(false)
  }

  let cargarFondo = async () => {
    if (JSON.parse(await ConfigService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  useEffect(() => {
    cargarFondo();
  }, []);

  return (
    <View style={appStyles.container}>
      <ImageBackground source={{ uri: image }} style={appStyles.image}>
        <Boton title="Elegi una foto de tu galeria"  color="#ffff00" onPress={elegirFoto}  />
        {startCamera ? (
          <Camera
            style={{ flex: 1, width: "100%" }}
            ref={(r) => {
              camera = r
            }}
          >
            <View
              style={appStyles.cameraContainer}
            >
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <TouchableOpacity
                  onPress={sacarFoto}
                  style={{
                    width: 70,
                    height: 70,
                    bottom: 125,
                    borderRadius: 50,
                    backgroundColor: '#fff'
                  }}
                />
              </View>
            </View>
          </Camera>
        ) : (
          <>
             <Boton title="Sacar una foto"  color="#ffff00" onPress={abrirCamara}  />
           
          </>
        )}
      </ImageBackground>
      <Menu navigation={navigation} />
      </View>
  )
}
