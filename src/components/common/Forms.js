import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import {CheckBox} from "react-native-elements";
import {FontAwesome} from "@expo/vector-icons";

export const Input = ({
                          label,
                          touched,
                          error,
                          theme,
                          style,
                          ...props
                      }) => {
    return (
        <View style={styles.wrap}>
            <Text style={{...styles.title, color: theme.textColor}}>{label}</Text>
            <TextInput style={{
                ...styles.authInput, ...style,
                borderColor: theme.textColor,
                color: theme.textColor
            }} {...props} />
            <Text style={styles.error}>{touched && error}</Text>
        </View>
    );
}

export const MyCheckbox = ({
                               text,
                               theme,
                               onPress,
                               icon,
                               param,
                               ...props
                           }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{...styles.action}} {...props}>
            <View>
                <CheckBox onPress={onPress}
                          checkedColor={theme.textColor}
                          uncheckedColor={theme.textColor}
                          containerStyle={styles.checkbox}
                          checked={param}/>
            </View>
            <Text style={{...styles.actionText, color: theme.textColor}}>
                <FontAwesome name={icon} size={20} color={theme.textColor}/> {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrap: {},
    error: {
        color: 'red',
        fontSize: 15
    },
    title: {
        fontSize: 20,
        lineHeight: 30
    },
    authInput: {
        borderBottomWidth: 2,
        fontSize: 20,
        lineHeight: 50,
        height: 50
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    actionText: {
        fontSize: 20,
    },
    checkbox: {
        width: 20,
        padding: 0
    }
})