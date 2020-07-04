import React from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button} from 'react-native'
import {CheckBox} from 'react-native-elements'
import {ThemeImage} from "../ThemeImage";
import {FontAwesome, FontAwesome5} from '@expo/vector-icons';

export const CreateAndEdit = ({
                                  theme, title, setTitle, text, setText, complete,
                                  favorite, setFavorite, urgent, setUrgent, errorText, errorTitle
                              }) => {

    return (
        <View>
            <ThemeImage theme={theme}/>
            <ScrollView style={styles.wrap}>
                <View style={styles.container}>
                    <Text style={{...styles.title, color: theme.textColor}}>
                        Заголовок
                    </Text>
                    {errorTitle && <Text style={{color: 'red'}}>
                        {errorTitle}
                    </Text>}
                    <TextInput value={title} onChangeText={title => setTitle(title)}
                               placeholder='Заголовок дела...'
                               style={{...styles.input, color: theme.textColor, borderBottomColor: theme.textColor}}/>
                </View>
                <View style={styles.container}>
                    <Text style={{...styles.title, color: theme.textColor}}>
                        Описание
                    </Text>
                    {errorText && <Text style={{color: 'red'}}>
                        {errorText}
                    </Text>}
                    <TextInput multiline value={text} onChangeText={text => setText(text)}
                               numberOfLines={5}
                               placeholder='Описание дела...'
                               style={{
                                   ...styles.textArea,
                                   color: theme.textColor,
                                   borderBottomColor: theme.textColor
                               }}/>
                </View>
                <View style={styles.container}>
                    <Text style={{...styles.title, color: theme.textColor, marginBottom: 20}}>
                        Действия
                    </Text>
                    <TouchableOpacity onPress={() => setFavorite(!favorite)} style={{...styles.action}}>
                        <View>

                            <CheckBox onPress={() => setFavorite(!favorite)}
                                      checkedColor={theme.textColor}
                                      uncheckedColor={theme.textColor}
                                      containerStyle={styles.checkbox}
                                      checked={favorite}/>
                        </View>
                        <Text style={{...styles.actionText, color: theme.textColor}}>
                            <FontAwesome name="star" size={20} color={theme.textColor}/> Избранное
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setUrgent(!urgent)} style={{...styles.action}}>
                        <View>
                            <CheckBox onPress={() => setUrgent(!urgent)}
                                      checkedColor={theme.textColor}
                                      uncheckedColor={theme.textColor}
                                      containerStyle={styles.checkbox}
                                      checked={urgent}/>
                        </View>
                        <Text style={{...styles.actionText, color: theme.textColor}}>
                            <FontAwesome5 name="fire" size={20} color={theme.textColor}/> Срочное
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{...styles.container}}>
                    <Button onPress={complete} color={theme.textColor} title='ЗАВЕРШИТЬ'/>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,

    },
    input: {
        borderBottomWidth: 2,
        width: '100%',
        fontSize: 20,
        lineHeight: 40,
        height: 40
    },
    textArea: {
        borderBottomWidth: 2,
        fontSize: 20
    },
    wrap: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 100
    },
    container: {
        marginBottom: 30
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    actionIcon: {},
    actionText: {
        fontSize: 20,

    },
    checkbox: {
        width: 20,
        padding: 0
    }
})