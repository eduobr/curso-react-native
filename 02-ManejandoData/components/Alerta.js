import React, { useState } from "react";
import { View, Text, Button, Alert } from "react-native";

const crearDialogo = () =>
  Alert.alert(
    "Titulo",
    "Subtitulo o mensaje que podemos agregar a este dialogo...",
    [
      {
        text: "Cancelar",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Aceptar",
        onPress: () => console.log("boton presionado"),
      },
    ],
    {cancelable: false}
  );

export default function Alerta() {
  const [alerta, setAlerta] = useState(false);
  return (
    <View>
      <Button title="Abrir dialogo" onPress={crearDialogo} />
    </View>
  );
}
