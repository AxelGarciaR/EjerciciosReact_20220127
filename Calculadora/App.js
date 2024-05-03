import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Inputs from './src/components/Inputs';
import Buttons from './src/components/Buttons';


export default function App() {
  /*Codigo js*/
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)
  const [resultado, setResultado] = useState(0)


  const sumar = () => {
    setResultado(parseFloat(numero1) + parseFloat(numero2));
  }

  const restar = () => {
    setResultado(parseFloat(numero1) - parseFloat(numero2));
  }


  const multiplicar = () => {
    setResultado(parseFloat(numero1) * parseFloat(numero2));
  }


  const dividir = () => {
    setResultado(parseFloat(numero1) / parseFloat(numero2));
  }



  return (
    <View style={styles.container}>
      <Text>Calcular dos numeros</Text>

      <Inputs
        texto_label='numero1'
        valor_numero={numero1}
        set_valor_numero={setNumero1}
      />

      <Inputs
        texto_label='numero2'
        valor_numero={numero2}
        set_valor_numero={setNumero2}
      />

      <Buttons
        texto_boton='Sumar'
        accion_boton={sumar}
      />

      <Buttons
        texto_boton='Restar'
        accion_boton={restar}
      />

      <Buttons
        texto_boton='Multiplicar'
        accion_boton={multiplicar}
      />

      <Buttons
        texto_boton='Dividir'
        accion_boton={dividir}
      />

      <Text>
        numero1:{numero1}
      </Text>

      <Text>
        numero2:{numero2}
      </Text>

      <Text>Resultado:{resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 30,
    padding: 10
  },
  input: {
    backgroundColor: 'grey',
    width: 150,
    padding: 10,
    margin: 5,
    fontSize: 20,
    fontWeight: '900'
  },
  boton: {
    backgroundColor: 'yellow',
    width: 150,
    padding: 10,
    margin: 5,
  }
});