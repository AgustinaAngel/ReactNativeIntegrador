import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Configuracion from "./src/Screens/Configuracion";
import CambioFondoScreen from "./src/Screens/CambioFondoScreen";
import AcercaDeScreen from "./src/Screens/AcercaDeScreen";
import MultimediaScreen from "./src/Screens/MultimediaScreen";
import Home from "./src/Screens/Home";
import EmergenciaScreen from "./src/Screens/EmergenciaScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Configuracion">
        <Stack.Screen
          name="Configuracion"
          component={Configuracion}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CambioFondoScreen" component={CambioFondoScreen} />
       <Stack.Screen name="AcercaDeScreen" component={AcercaDeScreen} />
        <Stack.Screen name="MultimediaScreen" component={MultimediaScreen} />
        <Stack.Screen name="EmergenciaScreen" component={EmergenciaScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
