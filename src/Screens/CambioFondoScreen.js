import { View, Text, StyleSheet, SafeAreaView, Button, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import Menu from '../components/Menu'
import * as ImagePicker from 'expo-image-picker';
import DataService from '../Services/DataService';
import Boton from './../components/Button'
import { Camera, CameraType } from 'expo-camera';
import appStyles from "../styles/styles";

let dataService = new DataService()

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
      await dataService.guardarBackground(JSON.stringify(result.assets[0]));
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
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
    await dataService.guardarBackground(JSON.stringify(photo));
    let backgroundImage = JSON.parse(await dataService.obtenerBackground());
    setImage(backgroundImage.uri);
    setStartCamera(false)
  }

  let cargarFondo = async () => {
    if (JSON.parse(await dataService.obtenerBackground())) {
      let backgroundImage = JSON.parse(await dataService.obtenerBackground());
      setImage(backgroundImage.uri);
    }
  }

  useEffect(() => {
    cargarFondo();
  }, []);

  return (
    <SafeAreaView style={[appStyles.container]}>
      <ImageBackground source={{ uri: image }} style={appStyles.image}>
        <Boton onPress={elegirFoto} titulo='Elegi una foto de tu galeria' style={appStyles.button} />
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
            <Boton onPress={abrirCamara} titulo='Sacar una foto' style={appStyles.button} />
          </>
        )}
      </ImageBackground>
      <Menu navigation={navigation} />
    </SafeAreaView>
  )
}
