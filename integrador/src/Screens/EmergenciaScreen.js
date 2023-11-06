import React, { useEffect } from 'react';
import { View, Text, Alert, Platform } from 'react-native';
import { Accelerometer } from 'react-native-sensors';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import WhatsAppStickers from 'react-native-whatsapp-stickers';
import { Linking } from 'react-native';

const EmergenciaScreen = () => {
  const emergencyPhoneNumber = '123456789'; 

  useEffect(() => {
    const accelerometerObservable = new Accelerometer({
      updateInterval: 100, 
    });

    accelerometerObservable.subscribe(({ x, y, z }) => {
      const accelerationThreshold = 20; 
      if (x > accelerationThreshold || y > accelerationThreshold || z > accelerationThreshold) {
        handleEmergency();
      }
    });
  }, []);

  const handleEmergency = async () => {
    if (Platform.OS === 'android') {
      const callPermission = await check(PERMISSIONS.ANDROID.CALL_PHONE);
      
      if (callPermission === RESULTS.GRANTED) {
        Linking.openURL(`tel:${emergencyPhoneNumber}`);
      } else {
        Alert.alert('Llamada de Emergencia', 'No se han otorgado permisos para realizar llamadas.');
      }
      
      SendIntentAndroid.sendText({
        text: `Mensaje de emergencia: ${whatsappMessage}`,
        type: SendIntentAndroid.TEXT_PLAIN,
        title: 'Mensaje de emergencia',
      });
    } else if (Platform.OS === 'ios') {
      const isAvailable = await WhatsApp.isInstalled();
      
      if (isAvailable) {
        WhatsApp.send({
          phone: emergencyPhoneNumber,
          text: `Mensaje de emergencia: ${whatsappMessage}`,
        });
      } else {
        Alert.alert('Llamado de Emergencia', 'WhatsApp no está instalado en tu dispositivo.');
      }
    }
  };

  return (
    <View>
      <Text>Llamado Emergencia</Text>
    </View>
  );
};

export default EmergenciaScreen;