import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {useDispatch} from "react-redux";
import {getAllTodosList} from "../redux/actions/app-action";
import {CommonActions} from "@react-navigation/routers";

export const AppButtons = ({theme, route, navigation}) => {

    const dispatch = useDispatch()
    const updateTodosLists = () => {
        dispatch(getAllTodosList())
    }

    const searchTodo = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'AllTodos' },
                    {
                        name: 'Search',
                        params: { key: route.key },
                    },

                ],
            })
        )
        navigation.navigate('All')

    }

    const Wrapper = Platform.select({
        ios: TouchableOpacity,
        android: TouchableNativeFeedback
    })

    return (
        <View style={styles.btnWrap}>
            <Wrapper onPress={updateTodosLists} activeOpacity={0.7}>
                <View style={{...styles.button}}>
                    <View>
                        <FontAwesome5 name='sync' size={18} color={theme.textColor} />
                    </View>
                    <Text style={{...styles.text, color: theme.textColor}}>
                        Обновить
                    </Text>
                </View>
            </Wrapper>
            <Wrapper onPress={() => searchTodo()} activeOpacity={0.7}>
                <View style={{...styles.button}}>
                    <View>
                        <FontAwesome5 name='search' size={18} color={theme.textColor} />
                    </View>
                    <Text style={{...styles.text, color: theme.textColor}}>
                        Найти
                    </Text>
                </View>
            </Wrapper>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 50,
        width: '50%',
        height: 50,
        backgroundColor: 'white',
        borderBottomColor: '#E7EAED',
        borderBottomWidth: 1,
        borderRightColor: '#E7EAED',
        borderRightWidth: 1,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 18,
        marginLeft: 10
    },
    btnWrap: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 50
    },
})