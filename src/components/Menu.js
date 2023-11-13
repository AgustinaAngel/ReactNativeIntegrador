

import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appStyles from "../styles/styles.js";
const Menu = () => {
  const navigation = useNavigation(); 

  return (
    <View style={appStyles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("CambioFondoScreen")}>
      <Text style={appStyles.text}>Fondo</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("MultimediaScreen")}>
      <Text style={appStyles.text}>Multimedia</Text>  
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("AcercaDeScreen")}>
      <Text style={appStyles.text}>Acerca</Text>  
      </TouchableOpacity>

      

    </View>
  );
};

export default Menu;