import React from "react";  
import { StyleSheet, Text, View } from "react-native";
import estilo from'./components/estilo';
import MinMax from "./components/MinMax";
import Aleatorio from "./components/Aleatorio";
import titulo from './components/Titulo'
import Titulo from "./components/Titulo";

export default ()=>{

    return (
        <View style={estilo.fundo}>
            <Titulo/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>        
       {/* <MinMax maior={90} menor={10}/>*/}
    
        </View>
    )
}

const style = StyleSheet.create(
    {
        txtG:{
            fontSize: 30,
            textAlign: 'center',
            backgroundColor: '#e6e1cf',
            margin:'50'
        }
    }
)