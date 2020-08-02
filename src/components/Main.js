import React from 'react'
import {useSelector} from "react-redux";
import {AppNav} from "../navigation/AppNavigation";
import {AuthScreen} from "../screens/AuthScreens/AuthScreen";

export const Main = ({theme}) => {
    const currentUser = useSelector(state => state.auth.currentUser)
    console.log(currentUser)
    if (!!currentUser) {
        return <AppNav theme={theme} />
    } else {
        return <AuthScreen theme={theme}/>
    }
}