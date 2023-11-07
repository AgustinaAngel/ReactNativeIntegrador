import { View, Text, Vibration, Alert, ToastAndroid, StyleSheet, Modal, Pressable } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import appStyles from "../styles/styles";

export default function ModalMensaje({ mensaje, modalVisible, setModalVisible, success }) {

    useEffect(() => {
        if (modalVisible) {
            Vibration.vibrate();
        }
    }, [modalVisible])

    return (
        <View style={appStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={appStyles.centeredView}>
                    {success ? (
                        <View style={appStyles.modalViewSuccess}>
                            <Text style={appStyles.modalText}>{mensaje}</Text>
                            <Pressable
                                style={[appStyles.button, appStyles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={appStyles.textStyle}>Cerrar modal</Text>
                            </Pressable>
                        </View>
                    ) : (
                        <View style={appStyles.modalViewError}>
                            <Text style={appStyles.modalText}>{mensaje}</Text>
                            <Pressable
                                style={[appStyles.button, appStyles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={appStyles.textStyle}>Cerrar modal</Text>
                            </Pressable>
                        </View>
                    )}

                </View>
            </Modal>
        </View>
    )
}

