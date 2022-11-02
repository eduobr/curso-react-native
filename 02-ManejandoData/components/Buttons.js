import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

export default function Buttons() {
  const [submit, setSubmit] = useState("");
  const [text, setText] = useState("Chanchito más Feliz");

  return (
    <View>
      <Text>Texto: {submit}</Text>
      {/* Si le queremos dar una acción custom a nuestro boton es recomendable usar */}
      <TouchableWithoutFeedback
        style={styles.TouchableWithoutFeedback}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con éxito");
        }}
      >
        <View style={styles.view}>
          <Text>Aceptar</Text>
        </View>
      </TouchableWithoutFeedback>

      {/* En el momento en que es presionado cambia su opacidad */}
      {/* <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con éxito");
        }}
      >
        <View style={styles.view}><Text>Aceptar</Text></View>
      </TouchableOpacity> */}
      {/* Este boton solo funciona en Android */}
      {/* <TouchableNativeFeedback
        // Le agregamos true para que no tenga bordes
        background={TouchableNativeFeedback.Ripple('#00f',true)}
        onPress={() => {
          setSubmit(text);
          alert("Texto enviado con éxito");
        }}
      >
        <View style={styles.view}><Text>Aceptar</Text></View>
      </TouchableNativeFeedback> */}

      {/* <TouchableHighlight 
        underlayColor='#999'
        activeOpacity={0.2}
        onPress={()=>{
          setSubmit(text);
          alert('Texto enviado con éxito');
        }}>*/}
      {/* Le debemos pasar el title como un Children */}
      {/* <Text>Aceptar</Text> */}
      {/* </TouchableHighlight> */}
      {/* <Button 
        title="Aceptar"
        onPress={()=>{
          setSubmit(text);
          alert('Texto enviado con éxito');
        }}/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    backgroundColor: "#EEE",
  },
  view:{
    height:40,
    width:300,
    alignItems:'center',
    justifyContent:'center'
    // flex:0.5
  },
});
