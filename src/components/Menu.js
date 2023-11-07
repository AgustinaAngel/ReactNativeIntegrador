import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import appStyles from "../styles/styles";

export default function Menu({ navigation }) {
  return (
    <View style={[appStyles.menu]}>
      <Pressable
        style={[appStyles.button]}
        onPress={() => navigation.navigate("CambioFondoScreen")}
      >
        <Text style={[appStyles.text]}>Fondo</Text>        
      </Pressable>
      <Pressable
        style={[appStyles.button]}
        onPress={() => navigation.navigate("MultimediaScreen")}
      >
        <Text style={[appStyles.text]}>Home</Text>        
      </Pressable>
      <Pressable
        style={[appStyles.button]}
        onPress={() => navigation.navigate("AcercaDeScreen")}
      >
        <Text style={[appStyles.text]}>Home</Text>        
      </Pressable>
      <Pressable
        style={[appStyles.button]}
        onPress={() => navigation.navigate("EmergenciaScreen")}
      >
        <Text style={[appStyles.text]}>About</Text>        
      </Pressable>
      
    </View>
  );
}
