import React from "react";
import { StyleSheet, ImageBackground, Text } from "react-native";

export default function ImagenesFondo() {
  return (
    <ImageBackground
      style={styles.photo}
      //source={require('../assets/icon.png')} recurso local
      source={{ uri: "https://placekitten.com/200/200" }} //recurso web
    >
        <Text>lalala</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  photo: {
    height: 200,
    width: 200,
  },
});
