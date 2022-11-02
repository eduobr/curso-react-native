import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
//Las constantes nos permitirán saber tipo de permisos tiene el usuario
import Constants from "expo-constants";

import {Camera} from 'expo-camera';

export default function App() {
  const [location, setLocation] = useState({});

  const [permisos, setPermisos] = useState(null);
  const [tipo, setTipo] = useState(Camera.Constants.Type.back);

  const getPermisos = async () =>{
    const {status} = await Camera.requestPermissionsAsync();
    setPermisos(status == 'granted')
  }

  const buscaLocation = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status !== "granted") {
      return Alert.alert(
        "No tenemos los permisos necesarios para acceder a la location"
      );
    }
    const location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    buscaLocation();
    getPermisos();
  });

  if (permisos === null) {
    return <View><Text>Esperando Permisos...</Text></View>
  }
  if (permisos === false) {
    return <View><Text>No tenemos acceso a la camara :(</Text></View>
  }

  return(
    <View style={styles.container}>
      <Camera style={styles.camera} type={tipo}>
        <Button title="Voltear"
          onPress={()=>{
            const {front, back} = Camera.Constants.Type;
            const nuevoTipo = tipo === back ? front : back; 
            setTipo(nuevoTipo)
          }}/>
      </Camera>
    </View>
  )

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        {location.coords ? (
          <Marker
            coordinate={location.coords}
            title="Titulo"
            description="Descripciòn del punto"
          />
        ) : null}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  camera:{
    flex:1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
