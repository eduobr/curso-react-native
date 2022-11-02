import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Texto = ({style}) => {
  // const { children } = props;
  const [texto, setTexto] = useState("Hola Mundo");
  //const cambio = ;
  const actualizaTexto = () => {
    setTexto((texto) === "Hola Mundo" ? "Chao Mundo" : "Hola Mundo");
  };
  return (
    //lo que le pasemos en style va a reemplazar el valor de styles.texto
    <Text style={[styles.texto, style]} onPress={actualizaTexto}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}/>
      <Texto style={styles.green}/>
      <Texto style={styles.blue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "white",
    fontSize: 24,
    height:100,
    width:100
  },
  red:{
    backgroundColor:'red',
    //flex:1
  },
  green:{
    backgroundColor:'green',
    //flex:2,
  },
  blue:{
    backgroundColor:'blue',
    //flex:3
  },
  container: {
    flex: 1,
    flexDirection:"row-reverse",
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "space-evenly", //el espacio entre cada uno de los elementos va a ser siempre el mismo
  },
});
