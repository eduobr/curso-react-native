import React from 'react'
import { StyleSheet,Image } from "react-native";

export default function Imagenes() {
    return (
        <Image style={styles.photo}
            //source={require('../assets/icon.png')} recurso local
            source={{uri:'https://placekitten.com/200/200'}} //recurso web

        />
    )
}

const styles = StyleSheet.create({
    photo:{
        height: 200,
        width: 200
    }
})
