import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Buttons({texto_boton, accion_boton}) {
    return (
        <>
            <TouchableOpacity
                style={styles.boton}
                onPress={accion_boton}
            >
                <Text style={{ textAlign: "center" }}>{texto_boton}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    boton: {
      backgroundColor: 'yellow',
      width: 150,
      padding: 10,
      margin: 5,
    }
  });