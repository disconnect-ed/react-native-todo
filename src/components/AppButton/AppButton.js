import React from 'react'
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'
import {AppTextBold} from "../AppTextBold/AppTextBold";
import {THEME} from "../../utils/theme";

export const AppButton = ({onPress, color = THEME.MAIN_COLOR, ...props}) => {

    const Wrapper = Platform.select({
        ios: TouchableOpacity,
        android: TouchableNativeFeedback
    })

    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={{...styles.button, backgroundColor: color}}>
                <AppTextBold style={styles.text}>
                    {props.children}
                </AppTextBold>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white'
    }
})