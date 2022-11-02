import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";

//TouchableNativeFeedback es un botón solo presente en Android

// const width = Dimensions.get('screen').width;
const { width, height } = Dimensions.get("window");

export default function Scrollview() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
        {/* Al colocarlo dentro del ScrollView, todo nuestro contenido se va a la parte
            de arriba ya que el ScrollView va a usar todo el alto de la ventana para hacer
            scroll de nuestro contenido */}
      <ScrollView style={styles.scrollView}>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <Text>Texto: {text}</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe acá"
          onChangeText={setText}
          defaultValue={text}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    backgroundColor: "#eee",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    width: width,
    //width:'100%', //el 100% del ancho
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView:{
      width: Dimensions.get('window').width, //para que el scroll aparezca al final del ancho de la ventana
  }
});
