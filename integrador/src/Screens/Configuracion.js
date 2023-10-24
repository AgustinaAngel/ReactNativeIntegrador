import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Configuracion = () => {
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [musicURL, setMusicURL] = useState('');

  const saveConfig = async () => {
    try {
      await AsyncStorage.setItem('emergencyPhoneNumber', emergencyPhoneNumber);
      await AsyncStorage.setItem('videoURL', videoURL);
      await AsyncStorage.setItem('musicURL', musicURL);
    } catch (error) {
      console.error('Error al guardar la configuración:', error);
    }
  };

  return (
    <View>
      <Text>Número de Teléfono de Emergencia:</Text>
      <TextInput
        placeholder="Ingresa el número de teléfono"
        value={emergencyPhoneNumber}
        onChangeText={(text) => setEmergencyPhoneNumber(text)}
      />

      <Text>URL del Video:</Text>
      <TextInput
        placeholder="Ingresa la URL del video"
        value={videoURL}
        onChangeText={(text) => setVideoURL(text)}
      />

      <Text>URL de Música de Fondo:</Text>
      <TextInput
        placeholder="Ingresa la URL de música de fondo"
        value={musicURL}
        onChangeText={(text) => setMusicURL(text)}
      />

      <Button title="Guardar Configuración" onPress={saveConfig} />
    </View>
  );
};

export default Configuracion;
