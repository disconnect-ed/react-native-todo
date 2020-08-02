import React from "react";
import {View, Image, StyleSheet} from 'react-native'
import logo from '../../../assets/img/logo.png'

export const AppPreloader = () => {
    return (
        <View style={styles.wrapper}>
            <Image style={styles.img} source={logo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        flex: 1,
        width: 100,
        resizeMode: 'contain'
    }
})