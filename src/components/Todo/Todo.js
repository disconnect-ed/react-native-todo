import React from 'react'
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {AppText} from "../AppText/AppText";

export const Todo = ({todo, onRemove, onOpen}) => {
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onLongPress={() => onRemove(todo.id)}
                          onPress={() => onOpen(todo.id)}
        >
            <View style={styles.todo}>
                <AppText>
                    {todo.title}
                </AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 5
    }
})