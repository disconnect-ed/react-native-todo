import React from 'react'
import {StyleSheet, View, TouchableOpacity, Text, TouchableNativeFeedback, Platform} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export const AppButton = ({theme, title, icon, onPress, ...props}) => {

    const Wrapper = Platform.select({
        ios: TouchableOpacity,
        android: TouchableNativeFeedback
    })

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button}}>
                <View>
                    <FontAwesome5 name={icon} size={18} color={theme.textColor} />
                </View>
                <Text style={{...styles.text, color: theme.textColor}}>
                    {title}
                </Text>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: 50,
        width: '50%',
        height: 50,
        backgroundColor: 'white',
        borderBottomColor: '#E7EAED',
        borderBottomWidth: 1,
        borderRightColor: '#E7EAED',
        borderRightWidth: 1,
    },
    text: {
        textTransform: 'uppercase',
        fontSize: 18,
        marginLeft: 10
    }
})