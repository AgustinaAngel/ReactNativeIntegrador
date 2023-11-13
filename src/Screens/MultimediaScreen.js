import React, { useState,useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, SafeAreaView, StyleSheet, Linking, Alert, Platform, ImageBackground } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import ConfigService from "../Services/ConfigService";
import appStyles from '../styles/styles';

const Stack = createStackNavigator();

export default function MultimediaScreen() {
  const [fondo, setFondo] = useState("");
  useEffect(() => {
    (async () => {
      let backgroundImage = JSON.parse(await ConfigService.obtenerBackground());
      setFondo(backgroundImage.uri);
    })();
  }, []);

  return (
   <>
    <View style={appStyles.container}>
    <ImageBackground source={{ uri: fondo }} style={appStyles.image}>

    </ImageBackground>
    </View>
   </>
  );
}