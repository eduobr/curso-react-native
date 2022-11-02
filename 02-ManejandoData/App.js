import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import ActivityIndicators from "./components/ActivityIndicators";
import Alerta from "./components/Alerta";
import Imagenes from "./components/Imagenes";
import ImagenesFondo from "./components/ImagenesFondo";
import Modales from "./components/Modales";
// import Scrollview from "./components/Scrollview";
// import Buttons from "./components/Buttons";
// import FlatList from "./components/FlatList";
// import SectionList from "./components/SectionList";
// import GetDataApi from "./components/GetDataApi";

//TouchableNativeFeedback es un botón solo presente en Android

// const width = Dimensions.get('screen').width;
const { width, height } = Dimensions.get("window");

export default function App() {
  const [text, setText] = useState("Chanchito Feliz");
   
  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe acá"
        onChangeText={setText}
        defaultValue={text}
      />
      {/* <Scrollview /> */}
      {/* <Buttons /> */}
      {/* <FlatList /> */}
      {/* <SectionList /> */}
      {/* <GetDataApi /> */}
      {/* <ActivityIndicators />  */}
      {/* <Imagenes /> */}
      {/* <ImagenesFondo/> */}
      {/* <Modales /> */}
      {/* <Alerta /> */}
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
});
