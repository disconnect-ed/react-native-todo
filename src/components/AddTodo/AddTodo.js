import React, {useState} from 'react'
import {View, StyleSheet, Keyboard, TextInput, Alert} from 'react-native'
import {THEME} from "../../utils/theme";
import { AntDesign } from '@expo/vector-icons';


export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (!value.trim()) {
            Alert.alert('Введите название дела!')
            return
        }
        onSubmit(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                       onChangeText={setValue}
                       value={value}
                       placeholder='Введите название дела'
                       autoCorrect={false}
            />
            <AntDesign.Button onPress={pressHandler} name='plus'>Добавить</AntDesign.Button>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        padding: 10,
        fontSize: 18
    }
})