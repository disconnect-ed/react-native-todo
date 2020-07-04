import React from 'react'
import {View, Text, Button} from "react-native";
import {useSelector} from "react-redux";
import {List} from "../components/List/List";

export const FavoriteScreen = ({navigation, theme}) => {
        const loading = useSelector(state => state.app.isLoading)
        const favoriteList = useSelector(state => state.app.favoriteList)

        if (loading) {
            return <Text>111</Text>
        }

        if (favoriteList.length === 0) {
            return <Text>ok</Text>
        }

        return (
            <List navigation={navigation} todos={favoriteList} theme={theme}/>
    );
}