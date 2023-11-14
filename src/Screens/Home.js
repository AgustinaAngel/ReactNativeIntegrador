import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  
  const CambioFondo = () => {
    navigation.navigate("CambioFondoScreen");
  };

  const Multimedia = () => {
    navigation.navigate("MultimediaScreen");
  };

  const AcercaDeScreen = () => {
    navigation.navigate("AcercaDeScreen");
  };

  const LLamadoEmergencia = () => {
    navigation.navigate("EmergenciaScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> ¡Agita el celular para llamar a tu contacto de emergencia! </Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={CambioFondo}>
          <Text style={styles.buttonText}>Cambio de Fondo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={LLamadoEmergencia}>
          <Text style={styles.buttonText}>Llamado</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={Multimedia}>
          <Text style={styles.buttonText}>Video y Música</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={AcercaDeScreen}>
          <Text style={styles.buttonText}>Acerca de</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: '#FF00FB',
    fontSize: 20,
    width: '80%',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#FF00FB',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 100,
    width: 150,
  },
  buttonText: {
    color: 'pink',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
