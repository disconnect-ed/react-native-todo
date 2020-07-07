import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'

export const Loading = ({theme}) => {
    const morning = <Text style={{color: theme.textColor, fontSize: 25}}>Загрузка...</Text>
    const day = <Text style={{color: theme.textColor}}>Загрузка...</Text>
    const evening = <Text style={{color: theme.textColor}}>Загрузка...</Text>
    const night = <Text style={{color: theme.textColor}}>Загрузка...</Text>

    return (
        <View style={styles.wrap}>
            {theme.active === 'morning' && morning}
            {theme.active === 'day' && morning}
            {theme.active === 'evening' && morning}
            {theme.active === 'night' && morning}
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})