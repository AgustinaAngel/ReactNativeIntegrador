import { View, Text, SafeAreaView, StyleSheet, Linking, Alert, Platform, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react';
import Boton from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import appStyles from '../styles/styles';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();


export default function Home({ navigation }) {
/*
  const LlamadoDeEmergencia = () => {
    navigation.navigate("EmergenciaScreen");
  };*/
  
  const CambioFondo = async () => {
    navigation.navigate("CambioFondoScreen");
  };

  const Multimedia = async () => {
    navigation.navigate("MultimediaScreen");
  };

  const AcercaDeScreen= async () => {
    navigation.navigate("AcercaDeScreen");
  };

  return (
    <View style={appStyles.container}>
        <Text style={{backgroundColor:'white', fontSize: 20, width: '80%', textAlign:'center'}}>Agita el celular para llamar a tu contacto de emergencia <AntDesign name="shake" size={24} color="black" /></Text>

      <View style={appStyles.row}>
        {/*<Boton title="LlamadoDeEmergencia"  color="#ff0000" onPress={() => {LlamadoDeEmergencia}} />*/}
        <Boton title="CambioFondo"  onPress={CambioFondo} />
      </View>
      <View style={appStyles.row}>
        <Boton title="VideoYMusica"  onPress={Multimedia} />
        <Boton title="AcercaDeScreen"  onPress={AcercaDeScreen} />
      </View>
    </View>
  );
}

