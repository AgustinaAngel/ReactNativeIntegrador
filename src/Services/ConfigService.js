import AsyncStorage from "@react-native-async-storage/async-storage";
const NUMEROTELEFONO_KEY = "CONFIG_telefono";
const URLVIDEO_KEY = "CONFIG_urlVideo";
const URLMUSICA_KEY = "CONFIG_urlMusica";
const BACKGROUND_KEY='background';

class ConfigService {

    static checkConfig = async (emergencyPhoneNumber, videoURL,musicURL) => {
        if (emergencyPhoneNumber != null && videoURL != null && musicURL != null) {
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
  static guardarBackground = async(background) => { 
    try {    
        await AsyncStorage.setItem(BACKGROUND_KEY, background);  
        return true;
    } catch(e) {    
        console.log(e);
        return false;
    }
}; 

static obtenerVideo = async() => { 
    let storedVideo = await AsyncStorage.getItem(URLVIDEO_KEY);
    const returnValue = storedVideo; 
    return returnValue; 
}; 
static obtenerMusica = async() => { 
  let storedMusica = await AsyncStorage.getItem(URLMUSICA_KEY);
  const returnValue = storedMusica; 
  return returnValue; 
}; 
static obtenerBackground = async() => { 
  let storedBackground = await AsyncStorage.getItem(BACKGROUND_KEY);
  const returnValue = storedBackground; 
  return returnValue; 
}; 
}
export default ConfigService;
