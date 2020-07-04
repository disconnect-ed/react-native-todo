import React from 'react'
import {View, Text, Button} from "react-native";
import {useSelector} from "react-redux";
import {List} from "../components/List/List";

export const UrgentScreen = ({navigation, theme}) => {
    const loading = useSelector(state => state.app.isLoading)
    const urgentList = useSelector(state => state.app.urgentList)

    if (loading) {
        return <Text>111</Text>
    }

    if (urgentList.length === 0) {
        return <Text>ok</Text>
    }

    return (
        <List navigation={navigation} todos={urgentList} theme={theme}/>
    );
}