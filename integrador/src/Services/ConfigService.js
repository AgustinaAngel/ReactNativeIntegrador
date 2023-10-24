import AsyncStorage from "@react-native-async-storage/async-storage";
const NUMEROTELEFONO_KEY = "CONFIG_telefono";
const URLVIDEO_KEY = "CONFIG_urlVideo";
const URLMUSICA_KEY = "CONFIG_urlMusica";

class ConfigService {

    static checkConfig = async (emergencyPhoneNumber, videoURL,musicURL) => {
        if (emergencyPhoneNumber != null && password === usuarioContra) {
          return true;
        } else {
          return false;
        }
      };
 
  static saveConfig = async (emergencyPhoneNumber, videoURL,musicURL) => {
    try {
        await AsyncStorage.setItem(NUMEROTELEFONO_KEY, emergencyPhoneNumber);
        await AsyncStorage.setItem(URLVIDEO_KEY, videoURL);
        await AsyncStorage.setItem(URLMUSICA_KEY, musicURL);
    } catch (error) {
        console.error('Error al guardar la configuración:', error);
    }
  };

}
export default ConfigService;
