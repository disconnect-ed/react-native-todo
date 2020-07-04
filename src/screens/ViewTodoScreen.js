import {useSelector} from "react-redux";
import {ThemeImage} from "../components/ThemeImage";
import React from "react";
import {ViewTodo} from "../components/ViewTodo/ViewTodo";
import {Alert} from "react-native";
import {useDispatch} from 'react-redux'
import {deleteTodo, getEditTodo} from "../redux/actions/app-action";

export const ViewTodoScreen = ({navigation, theme, ...props}) => {
    const dispatch = useDispatch()
    const edit = (id) => {
        dispatch(getEditTodo(id))
        navigation.navigate('Edit')
    }
    const complete = (id) => {
        Alert.alert(
            'Выполнить дело',
            `Вы точно хотите выполнить дело?`,
            [
                { text: 'НЕТ'},
                { text: 'ДА', onPress: () => {
                    navigation.goBack()
                    dispatch(deleteTodo(id))
                    }
                }
            ],
            { cancelable: false }
        );
    }
    // if (loading) {
    //     return <ThemeImage theme={theme}/>
    // }
    //
    // if (allTodos.length === 0) {
    //     return <ThemeImage theme={theme}/>
    // }

    return (
        <ViewTodo complete={complete} navigation={navigation} edit={edit}
                  item={props.route.params.item} theme={theme}/>
    );
}