import React from 'react';
import {View, StyleSheet, Platform} from "react-native";
import {THEME} from "../../utils/theme";
import {AppTextBold} from "../AppTextBold/AppTextBold";

export const Navbar = (props) => {
    return (
        <View style={{...styles.navbar, ...Platform.select({
                ios: styles.navbarIOS,
                android: styles.navbarAndroid
            })}}>
            <AppTextBold style={styles.text}>Todo App</AppTextBold>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',

    },
    navbarAndroid: {
        backgroundColor: THEME.MAIN_COLOR
    },
    navbarIOS: {
        backgroundColor: THEME.MAIN_COLOR,
        borderBottomWidth: 1
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})