import React, { useState } from "react";
import { StyleSheet, Modal, Text, Button, View } from "react-native";

export default function Modales() {
  const [modal, setModal] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        //onRequestClose={() =>{}} //podemos ejecutar codigo una vez que el modal se haya cerrado
      >
        <View style={styles.content}>
          <Text>Soy un Modal</Text>
          <Button title="Cerrar Modal" onPress={() => setModal(!modal)} />
        </View>
      </Modal>
      <Button title="Abrir Modal" onPress={() => setModal(!modal)} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
});
