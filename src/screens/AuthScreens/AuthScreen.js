import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {Text} from 'react-native'
import {LoginScreen} from "./LoginScreen";
import {SignUpScreen} from "./SignUpScreen";

export const AuthScreen = ({theme}) => {
    const [loginScreen, setLoginScreen] = useState(true)
    const changeScreen = () => {
        setLoginScreen(!loginScreen)
    }
    if (loginScreen) {
        return <LoginScreen changeScreen={changeScreen} theme={theme}/>
    } else {
        return <SignUpScreen changeScreen={changeScreen} theme={theme}/>
    }
}