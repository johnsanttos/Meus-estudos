import React, {useState} from 'react';
import { View, SafeAreaView, StyleSheet, Text,TextInput, Button} from 'react-native';

export default function() {
 
  const Hello = (props) => {
    const [name,setName] = useState ('John');
    const [mostrar, setMostrar] = useState (false);

    const handleClick =() => {
      setMostrar(!mostrar);
    }
 

    return(
          <View>
          <TextInput style={{
          width:200,
          height:40,
          borderWidth: 2,}} 
          value = {name} onChangeText = {t=>setName(t)}
          />
          
          <Button
          title = 'Salvar nome'
          onPress= {handleClick}
          
          />


          {mostrar &&
          <View style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 2 ,
            marginTop: 30,
 
          }}>
            <Text>O nome do jacalé é: </Text>
            <Text>{name}</Text>
          </View>
          }
         
          </View>
    )
  }
 
  return (
<SafeAreaView style={{
                                flex:1,
                                justifyContent: 'center',
                                alignItems:'center'

                            }}
>

<Hello/>

</SafeAreaView>
  );
}