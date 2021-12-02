import React,{useEffect, useState} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Css from './src/estilos/estilos'
import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';


export default function AppCalculadora() {


  const [nome, setNome] = useState ('');
  const [novoNome,setNovoNome] = useState('')

  const handleSave = async () =>{
if (novoNome != "") {
  await AsyncStorage.setItem('@nome',novoNome);
  setNome(novoNome);
}
  }

  const getNome = async() => {
    const n = await AsyncStorage.getItem ('@nome')
    setNome (n)
  }

  useEffect(()=>{
    getNome()},[])
 return (

  
 <View style = {Css.container}>

   <TextInput style = {Css.input}
   placeholder = 'Qual é o seu nome?'
   value ={novoNome} onChangeText = {e =>setNovoNome (e)}
   />

<Button
title ='Salvar'
onPress ={handleSave}
/>

<View style = {Css.nomearea}>
<Text style = {Css.nome}> {nome}</Text>
</View>

 </View >



  );
}

