import React,{useEffect} from 'react';
import { View, Text } from 'react-native';
import Css from './src/estilos/estilos'
import lista from './src/lista'

import { Alert } from 'react-native';


export default function AppCalculadora() {




 return (
 <View style = {Css.container}>
  
{lista.map(item => {
return (

<View style= {{padding: 10,}}>
  
<Text style= {{fontSize: 15,}}> 

{item.task} </Text>
</View>
)

})}


 </View>
  );
}