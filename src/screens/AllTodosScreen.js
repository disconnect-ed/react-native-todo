import React from 'react'
import {View, Text, Button} from "react-native";
import {List} from "../components/List/List";
import {useSelector} from "react-redux";
import {ThemeImage} from "../components/ThemeImage";
import {AppButtons} from "../components/AppButtons";
import {Loading} from "../components/Loading";
import {NoTodo} from "../components/NoTodo";

export const AllTodosScreen = ({navigation, addTodo, route, theme}) => {
    const loading = useSelector(state => state.app.isLoading)
    const allTodos = useSelector(state => state.app.allTodosList)

    if (loading) {
        return <Loading theme={theme} />
    }

    if (!allTodos || allTodos.length === 0) {
        return <NoTodo  navigation={navigation} route={route} theme={theme} />
    }

    return (
        <View>
            <ThemeImage theme={theme}/>
            <AppButtons theme={theme} route={route} navigation={navigation}/>
            <List todos={allTodos} navigation={navigation} theme={theme}/>
        </View>

    );
}