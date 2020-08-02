import React, {useState, useContext} from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'
import {AppCard} from "../../components/AppCard/AppCard";
import {EditModal} from "../../components/EditModal/EditModal";
import {AppTextBold} from "../../components/AppTextBold/AppTextBold";
import {AppButton} from "../../components/AppButton/AppButton";
import {FontAwesome, AntDesign} from '@expo/vector-icons'
import {TodoContext} from "../../context/todo/TodoContext";
import {ScreenContext} from "../../context/screen/screenContext";

export const TodoScreen = ({goBack}) => {
    const {todos, removeTodo, updateTodo} = useContext(TodoContext)
    const {todoId, changeScreen} = useContext(ScreenContext)
    const [modal, setModal] = useState(false)
    const todo = todos.find(todo => todoId === todo.id)

    const saveHandler = async (title) => {
        await updateTodo(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal value={todo.title} visible={modal}
                       onSave={saveHandler}
                       onCancel={() => setModal(false)}/>

            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
                <AppButton onPress={() => setModal(true)} >
                    <FontAwesome name='edit' size={20} />
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton onPress={() => changeScreen(null)} color='darkgrey'>
                        <AntDesign name='back' size={20} />
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton color='red'
                            onPress={() => removeTodo(todo.id)}
                    >
                        <FontAwesome name='remove' size={20} />
                    </AppButton>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: Dimensions.get('window').width / 4
    },
    title: {
        fontSize: 26
    },
    card: {
        marginBottom: 20
    }
})