import React from "react";
import { StyleSheet, Text, View } from "react-native";
import estilo from "./estilo";


export default () =>{
    return(
        <View>
            <Text style={style.txtG}>Aleatório</Text>
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 50,
            textAlign: 'center',
            color: '#fe6960',
            margin:'50'
        }
    }
)