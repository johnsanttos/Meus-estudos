import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Text,TextInput, Button} from 'react-native';

export default function() {
 
  const [conta, setConta] = useState('');
  const [gorjeta, setGorjeta] = useState ('0')
  
  const calc = () => {
      let nConta = parseFloat (conta); //
      if (nConta) {

        setGorjeta(10/100 * nConta )

      } else {
        alert ('Digite o valor da conta')
      }
  }
 
  return (
<SafeAreaView style={{
                                flex:1,
                                alignItems:'center'

                            }}>

                              <Text
                              style ={{
                                fontSize: 25,
                                color: '#000'
                              }}
                              > Calculadora de gorjeta </Text>

                              <TextInput
                              style ={{
                              width: 350,
                              height:40,
                              fontSize:18,
                              backgroundColor: '#e7feff',
                              marginTop:20,
                              borderRadius:10,
                              padding:10

                              }}
                              placeholder = "Quanto deu a conta?"
                              placeholderTextColor ='#000'
                              keyboardType ='numeric'
                              value ={conta}
                              onChangeText = {n=>setConta (n)}
                              />

                              <Button style= {{
                                marginTop: 10,
                              }}
                              title ='Calcular' onPress ={calc}
                            
                              />



</SafeAreaView>
  );
}