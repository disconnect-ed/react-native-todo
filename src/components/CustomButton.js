import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export const CustomButton = ({onPress, name, style}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={{marginRight: 15, ...style}}>
            <FontAwesome5 name={name} size={18} color="white" />
        </TouchableOpacity>
    )
}