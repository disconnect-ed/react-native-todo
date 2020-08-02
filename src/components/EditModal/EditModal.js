import React, {useState} from 'react'
import {View, StyleSheet, Button, TextInput, Modal, Alert} from 'react-native'
import {THEME} from "../../utils/theme";
import {AppButton} from "../AppButton/AppButton";

export const EditModal = ({visible, onCancel, value, onSave}) => {
    const [title, setTitle] = useState(value)
    const saveHandler = () => {
        if (!title.trim().length) {
            Alert.alert('Введено пустое значение')
            return
        }
        onSave(title)
    }

    const cancelHandler = () => {
        setTitle(value)
        onCancel()
    }

    return (
        <Modal animationType='slide' transparent={false} visible={visible}>
            <View style={styles.wrap}>
                <TextInput value={title} onChangeText={setTitle}
                           placeholder='Введите название...' style={styles.input}/>
                <View style={styles.buttons}>
                    <AppButton color='darkgray' onPress={cancelHandler}>
                        Отменить
                    </AppButton>
                    <AppButton onPress={saveHandler} color='limegreen' >
                        Сохранить
                    </AppButton>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%',
        fontSize: 20
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        justifyContent: 'space-around',
        flexDirection: 'row'
    }
})

