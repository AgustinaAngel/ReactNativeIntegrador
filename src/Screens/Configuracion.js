import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
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
      const fondo = await ConfigService.obtenerBackground();
      if (fondo === "") {
        setFondo("");
      } else {
        setFondo(fondo);
      }
    })();
  }, []);

  return (
    <ImageBackground source={{ uri: fondo }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>
          ¡Bienvenido a la aplicación de Agus y Mica!
        </Text>
        <Text style={styles.subTitle}>Configuración</Text>
        <Text style={styles.label}>Número de Teléfono de Emergencia:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa el número de teléfono"
            returnKeyType="next"
            value={emergencyPhoneNumber}
            onChangeText={(text) => setEmergencyPhoneNumber(text)}
          />
        </View>

        <Text style={styles.label}>URL del Video:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la URL del video"
            returnKeyType="next"
            value={videoURL}
            onChangeText={(text) => setVideoURL(text)}
          />
        </View>

        <Text style={styles.label}>URL de Música de Fondo:</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ingresa la URL de música de fondo"
            returnKeyType="next"
            value={musicURL}
            onChangeText={(text) => setMusicURL(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleOnPress}
        >
          <Text style={styles.buttonText}>Guardar Configuración</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF00FB",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 20,
    color: "#FF00FB",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    color: "#9D009B",
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 5,
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 40,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    backgroundColor: "#9D009B",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default Configuracion;
