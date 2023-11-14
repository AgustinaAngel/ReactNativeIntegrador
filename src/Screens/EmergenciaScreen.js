import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Button, Text, Linking } from "react-native";
import Menu from "../components/Menu";
import ConfigService from "../Services/ConfigService";
import Acelerometro from '../components/Acelerometro'
import { Accelerometer } from 'expo-sensors';

export default function EmergenciaScreen({ navigation }) {

  const [numero, setNumero] = useState("");

  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const LlamarNumero = () => {
    if (numero != null) {
    Linking.openURL(`tel:${numero}`) 
    }else{
      Alert.alert("ATENCIÓN", "DEBES INGRESAR UN NÚMERO DE TELEFONO EN LA PRIMER PANTALLA PARA UTILIZAR ESTA FUNCIÓN")
    }

  }

  useEffect(() => {
    async function getNumber() {
      let data = await ConfigService.obtenerCredenciales();
      setNumero(JSON.stringify(data.numeroEmergencia));
    }
    Accelerometer.addListener(setData);
    getNumber();
  }, []);

  if (x > 1 || y > 1 || x < -1 || y < -1) {
   
  while (x > 1) {
    LlamarNumero()
    setData({x:0, y:0, z:0})
  }


  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>LLAMADO DE EMERGENCIA</Text>

      <Text style={styles.text}>x: {x}</Text>
      <Text style={styles.text}>y: {y}</Text>
      <Text style={styles.text}>z: {z}</Text>

      <Menu navigation={navigation}></Menu>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  container: {
    paddingTop: 50,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: "#F3E5AB",
  },
  button: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "brown",
    height: 50,
    width: 200,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: "black",
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    width: 250,
    height: "auto",
    padding: 10,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
    backgroundColor: "#FFFEDC",
  },
  textLabel: {
    alignSelf: "center",
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
  },
});