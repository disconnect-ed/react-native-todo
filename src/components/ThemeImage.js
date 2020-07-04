import React from 'react'
import {Image, StyleSheet, View} from "react-native";

export const ThemeImage = ({theme}) => {
    const morning = <Image style={styles.img} source={require('../../assets/img/1.png')} />
    const day = <Image style={styles.img} source={require('../../assets/img/2.png')} />
    const evening = <Image style={styles.img} source={require('../../assets/img/3.png')} />
    const night = <Image style={styles.img} source={require('../../assets/img/4.png')} />
    return (
        <View style={styles.img}>
            {theme.img === 1 && morning}
            {theme.img === 2 && day}
            {theme.img === 3 && evening}
            {theme.img === 4 && night}
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: '100%'
    }
})