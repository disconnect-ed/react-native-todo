import React, {useEffect} from 'react'
import {View, Text, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {List} from "../components/List/List";
import {ThemeImage} from "../components/ThemeImage";
import {AppButtons} from "../components/AppButtons";
import {getFavoriteList} from "../redux/actions/app-action";
import {Loading} from "../components/Loading";
import {NoTodo} from "../components/NoTodo";

export const FavoriteScreen = ({navigation, route, theme}) => {
        const loading = useSelector(state => state.app.isLoading)
        const dispatch = useDispatch()
        const favoriteList = useSelector(state => state.app.favoriteList)
        const allTodosList = useSelector(state => state.app.allTodosList)

        useEffect(() => {
            dispatch(getFavoriteList())
            console.log(new Date().getSeconds())
        }, [allTodosList])

        if (loading) {
            return <Loading theme={theme} />
        }

        if (!favoriteList || favoriteList.length === 0) {
            return <NoTodo  navigation={navigation} route={route} theme={theme} />
        }

        return (
            <View>
                <ThemeImage theme={theme}/>
                <AppButtons theme={theme} route={route} navigation={navigation}/>
                <List navigation={navigation} todos={favoriteList} theme={theme}/>
            </View>

    );
}