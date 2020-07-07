import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {CommonActions} from "@react-navigation/routers";

export const NoTodo = ({theme, title = 'Дел не найдено', navigation, route}) => {
    const addTodo = () => {
        navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    { name: 'AllTodos' },
                    {
                        name: 'Create',
                        params: { key: route.key },
                    },

                ],
            })
        )
        navigation.navigate('All')
    }
    return (
        <View style={styles.wrap}>
            <View style={styles.icon}>
                <FontAwesome5 name="smile" size={70} color={theme.textColor} />
            </View>
            <Text style={{...styles.text, color: theme.textColor}}>
                {title}
            </Text>
            <TouchableOpacity onPress={addTodo} style={{flexDirection: 'row'}}>
                <FontAwesome5 style={{lineHeight: 30}} name="plus" size={20} color={theme.textColor} />
                <Text style={{...styles.btn, color: theme.textColor}}>Добавить дело</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {

    },
    text: {
        fontSize: 30
    },
    btn: {
        fontSize: 20,
        lineHeight: 30,
        paddingLeft: 10
    }
})