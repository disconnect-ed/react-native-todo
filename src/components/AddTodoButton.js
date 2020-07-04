import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export const AddTodoButton = ({onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{marginRight: 15}}>
            <FontAwesome5 name="plus" size={18} color="white" />
        </TouchableOpacity>
    )
}