import React from 'react'
import {View, Text, Button} from "react-native";
import {List} from "../components/List/List";
import {useSelector} from "react-redux";
import {ThemeImage} from "../components/ThemeImage";

export const AllTodosScreen = ({navigation, theme}) => {
    const loading = useSelector(state => state.app.isLoading)
    const allTodos = useSelector(state => state.app.allTodosList)

    if (loading) {
        return <ThemeImage theme={theme}/>
    }

    if (allTodos.length === 0) {
        return <ThemeImage theme={theme}/>
    }

    return (
            <List todos={allTodos} navigation={navigation} theme={theme}/>
    );
}