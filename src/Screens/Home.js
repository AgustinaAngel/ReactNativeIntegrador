import { View, Text, SafeAreaView, StyleSheet, Linking, Alert, Platform, ImageBackground } from 'react-native'
import React, { useState, useEffect } from 'react';
import DataService from '../Services/DataService';
import Boton from '../components/Button';
import { AntDesign } from '@expo/vector-icons';
import appStyles from '../styles/styles';

let dataService = new DataService();

export default function Home({ navigation }) {

  return (
    <View style={appStyles.container}>
        <Text style={{backgroundColor:'white', fontSize: 20, width: '80%', textAlign:'center'}}>Agita el celular para llamar a tu contacto de emergencia <AntDesign name="shake" size={24} color="black" /></Text>

      <View style={styles.row}>
        <Boton title="LlamadoDeEmergencia" icon="call" color="#ff0000" onPress={() => {/* Acción para el Botón 1 */}} />
        <Boton title="CambioFondo" icon="md-phone-portrait" color="#00ff00" onPress={() => {/* Acción para el Botón 2 */}} />
      </View>
      <View style={styles.row}>
        <Boton title="VideoYMusica" icon="photo-video" color="#0000ff" onPress={() => {/* Acción para el Botón 3 */}} />
        <Boton title="AcercaDeScreen" icon="questioncircle" color="#ffff00" onPress={() => {/* Acción para el Botón 4 */}} />
      </View>
    </View>
  );
}

