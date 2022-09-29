import React, { useState } from "react";
import  {View,
        StyleSheet, 
        Text, 
        TextInput,
        TouchableOpacity} from 'react-native';

export default function Home(){

let [valDollar, setValDollar] = useState();
let [valReais, setValReais] = useState();

function Calcular (){
    let resultado = (valDollar * 5.38);
    setValReais(resultado);
}

    return(
    <View style={styles.container}>
        <Text style={styles.titulo}>Projeto Dollar</Text>

        <TextInput
         onChangeText={setValDollar} 
        placeholder="Quantos dollares você tem?" 
        style={styles.campo}/>

        <Text style={styles.subtitulo}>Você possui R${valReais}</Text>

        <TouchableOpacity onPress={Calcular} style={styles.botao}>
            <Text style={styles.textoBotao}>Cálcular</Text>
        </TouchableOpacity>
</View>
   
);
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#2E8B57',
       flex:1,
       justifyContent: 'center',
       alignItems: 'center'
    
    },
    titulo:{
        fontSize: 28,
        color: '#FFF',
        fontWeight: 'bold',
        backgroundColor: '	#006400'
    },

    campo:{
        backgroundColor: '#FFF',
        fontSize: 25,
        marginTop: 38,
        borderRadius: 30,
        padding: 15,
        width: 350
        
    },

    botao:{
        backgroundColor: '#3CB371',
        padding: 15,
        marginTop: 20,
        width: 200,
        alignItems: 'center',
        borderRadius: 25
        
    },

    subtitulo: {
        color: '#FFF',
        fontSize: 15
    },

    textoBotao:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'

    }

});