import React from "react";
import { Text, View, StyleSheet } from "react-native";
import estilo from "./estilo";

export default props=> {
    const delta = props.max - props.min + 1
    const aleatorio = parseInt (Math.random() * delta + props.min)

 
    return(
        <View>
            <Text style={style.txtG}>
                numero aleatorio {aleatorio}
            </Text>
        </View>
    )
    }

    const style = StyleSheet.create(
        {
            txtG:{
                fontSize: 25,
                textAlign: 'center',
                backgroundColor: '#e6e1cf',
                margin:'50'
            }
        }
    )