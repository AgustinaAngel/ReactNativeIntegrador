import AsyncStorage from "@react-native-async-storage/async-storage";
const NUMEROTELEFONO_KEY = "LOGIN_username";
const PASSWORD_KEY = "LOGIN_password";



class UsuarioService {
  static login = async (userName, password) => {
    const usuarioNombre = "HOLA";
    const usuarioContra = "HOLA";

    if (userName === usuarioNombre && password === usuarioContra) {
      return true;
    } else {
      return false;
    }
  };

  static automaticLoginVer = async () => {
    const savedUserName = await AsyncStorage.getItem("LOGIN_username");
    console.log(savedUserName);
    const savedUserPassword = await AsyncStorage.getItem("LOGIN_password");
    if (savedUserName !== null && savedUserPassword !== null) {
      return true;
    } else {
      return false;
    }
  };
  static eliminarCredenciales = async () => {
    try {
      await AsyncStorage.removeItem(USERNAME_KEY);
      await AsyncStorage.removeItem(PASSWORD_KEY);
    } catch (e) {
      console.log(e);
    }
  };

  static almacenarCredenciales = async (userName, password) => {
    try {
      await AsyncStorage.setItem(USERNAME_KEY, userName);
      await AsyncStorage.setItem(PASSWORD_KEY, password);
    } catch (e) {
      console.log(e);
    }
  };

  static obtenerCredencialesVer = async () => {
    let storedUserName = await AsyncStorage.getItem(USERNAME_KEY);
    let storedPassword = await AsyncStorage.getItem(PASSWORD_KEY);
    const returnValue = { userName: storedUserName, password: storedPassword };
    return returnValue;
  };
}
export default UsuarioService;