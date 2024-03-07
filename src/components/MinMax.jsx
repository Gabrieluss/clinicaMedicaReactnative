import React from "react";  
import { StyleSheet, Text, View } from "react-native";
import estilo from'./estilo';
import titulo from './Titulo';

export default props=>{
console.warn(props)
    return (
        <View style={estilo.fundo}>
            <Text style={style.txtG}>O número {props.maior} é maior que o número {props.menor}</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 15,
            textAlign: 'center',
            backgroundColor: '#e6e1cf',
            margin:'50'
        }
    }
)