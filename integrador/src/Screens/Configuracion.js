import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import ConfigService from "../Services/ConfigService";
import appStyles from '../styles/styles';
import { createStackNavigator } from "@react-navigation/stack";
import MessageConstants from './../Constants/MessageConstants';
const Stack = createStackNavigator();

function Configuracion() {
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [videoURL, setVideoURL] = useState('');
  const [musicURL, setMusicURL] = useState('');

  const handleOnPress = async () => {
    const configuracionExitosa = await ConfigService.checkConfig(emergencyPhoneNumber, videoURL,musicURL);

    if (configuracionExitosa) {
      navigation.navigate("Home");
      await ConfigService.saveConfig(emergencyPhoneNumber, videoURL,musicURL);
    } else {
      const texto = MessageConstants.MSG_INGRESE_NUEVAMENTE;
      Alert.alert(MessageConstants.MSG_CONFIGURACION_INCORRECTA, texto);
    }
  };

  return (

    <View style={appStyles.container}>
      
 <Text>Número de Teléfono de Emergencia:</Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          style={appStyles.input}
          placeholder="Ingresa el número de teléfono"
          returnKeyType="next"
          value={emergencyPhoneNumber}
          onChangeText={(text) => setEmergencyPhoneNumber(text)}
        />
      </View>

      <Text>URL del Video:</Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          style={appStyles.input}
          placeholder="Ingresa la URL del video"
          returnKeyType="next"
          value={videoURL}
          onChangeText={(text) => setVideoURL(text)}
        />
      </View>

      <Text>URL de Música de Fondo:</Text>
      <View style={appStyles.inputContainer}>
        <TextInput
          style={appStyles.input}
          placeholder="Ingresa la URL de música de fondo"
          returnKeyType="next"
          value={videoURL}
          onChangeText={(text) => setMusicURL(text)}
          />
      </View>

      <Button title="Guardar Configuración" onPress={handleOnPress} />
    </View>

  );
};

export default Configuracion;
