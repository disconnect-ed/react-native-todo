import React, {useEffect} from 'react'
import {View, Text, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {List} from "../components/List/List";
import {ThemeImage} from "../components/ThemeImage";
import {AppButtons} from "../components/AppButtons";
import {Loading} from "../components/Loading";
import {NoTodo} from "../components/NoTodo";
import {getUrgentList} from "../redux/actions/app-action";

export const UrgentScreen = ({navigation, route, theme}) => {
    const loading = useSelector(state => state.app.isLoading)
    const dispatch = useDispatch()
    const urgentList = useSelector(state => state.app.urgentList)
    const allTodosList = useSelector(state => state.app.allTodosList)

    useEffect(() => {
        dispatch(getUrgentList())
    }, [allTodosList])

    if (loading) {
        return <Loading theme={theme} />
    }

    if (!urgentList || urgentList.length === 0) {
        return <NoTodo  navigation={navigation} route={route} theme={theme} />
    }

    return (
        <View>
            <ThemeImage theme={theme}/>
            <AppButtons theme={theme} route={route} navigation={navigation}/>
            <List navigation={navigation} todos={urgentList} theme={theme}/>
        </View>

    );
}