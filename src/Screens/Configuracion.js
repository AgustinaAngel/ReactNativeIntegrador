import React, { useState, useRef,useEffect } from "react";
import { View, Text, TextInput, Button, Alert, ImageBackground } from "react-native";
import ConfigService from "../Services/ConfigService";
import appStyles from "../styles/styles";
import { createStackNavigator } from "@react-navigation/stack";
import MessageConstants from "./../Constants/MessageConstants";
const Stack = createStackNavigator();

function Configuracion({ navigation }) {
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [musicURL, setMusicURL] = useState("");
  const [fondo, setFondo] = useState("");

  const handleOnPress = async () => {
    const configuracionExitosa = await ConfigService.checkConfig(
      emergencyPhoneNumber,
      videoURL,
      musicURL
    );

    if (configuracionExitosa) {
      navigation.navigate("Home");
      await ConfigService.saveConfig(emergencyPhoneNumber, videoURL, musicURL);
    } else {
      const texto = MessageConstants.MSG_INGRESE_NUEVAMENTE;
      Alert.alert(MessageConstants.MSG_CONFIGURACION_INCORRECTA, texto);
    }
  };

  useEffect(() => {
    (async () => {
      const fondo =  await ConfigService.obtenerBackground();
    if (fondo ==""){
      setFondo("");
    }else{
      setFondo(fondo);
    }
    })();
  }, []);


  return (
    <View style={appStyles.container}>
        <ImageBackground source={{ uri: fondo }} style={appStyles.image}>
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
          value={musicURL}
          onChangeText={(text) => setMusicURL(text)}
        />
      </View>

      <Button title="Guardar Configuración" onPress={handleOnPress} />
      </ImageBackground>
    </View>
  );
}

export default Configuracion;
