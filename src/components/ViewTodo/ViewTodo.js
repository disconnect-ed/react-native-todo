import React from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native'
import {ThemeImage} from "../ThemeImage";
import {FontAwesome5} from '@expo/vector-icons';

export const ViewTodo = ({navigation, complete, edit, theme, item}) => {

    return (
        <View style={{backgroundColor: 'white'}}>
            <ThemeImage theme={theme}/>
            <ScrollView style={styles.wrap}>
                <Text style={{...styles.title, color: theme.textColor}}>
                    {item.title}
                </Text>
                <View style={styles.container}>
                    <Text style={{...styles.subtitle, color: theme.textColor}}>
                        Дата создания:
                    </Text>
                    <Text style={{...styles.text, color: theme.textColor}}>
                        {item.date}
                    </Text>
                </View>
                <View style={styles.container}>
                    <Text style={{...styles.subtitle, color: theme.textColor}}>
                        {item.text ? 'Описание:' : 'Описание отсутствует'}
                    </Text>

                    <Text style={{...styles.text, color: theme.textColor}}>
                        {item.text}
                    </Text>

                </View>
                <View style={styles.container}>
                    <Text style={{...styles.subtitle, color: theme.textColor, marginBottom: 20}}>
                        Действия:
                    </Text>
                    <TouchableOpacity onPress={() => edit(item.id)} style={styles.action}>
                        <View>
                            <FontAwesome5 name="pen" size={20} color={theme.textColor}/>
                        </View>
                        <Text style={{...styles.actionText, color: theme.textColor}}>
                            Редактировать
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => complete(item.id)} style={styles.action}>
                        <View>
                            <FontAwesome5 name="check" size={20} color={theme.textColor}/>
                        </View>
                        <Text style={{...styles.actionText, color: theme.textColor}}>
                            Выполнить
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        marginBottom: 15
    },
    wrap: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 110
    },
    subtitle: {
        fontSize: 25
    },
    text: {
        fontSize: 20
    },
    container: {
        marginBottom: 15
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    actionIcon: {
        paddingRight: 10,
    },
    actionText: {
        fontSize: 20,
        paddingLeft: 10
    }
})