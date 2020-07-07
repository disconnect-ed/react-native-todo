import React from 'react'
import {TextInput, View, StyleSheet} from 'react-native'

export const Search = ({theme, searchQuery, changeSearchQuery}) => {
    return (
        <View style={styles.wrap}>
            <TextInput onChangeText={(text) => changeSearchQuery(text)} placeholder='Введите название дела...' value={searchQuery}
                       style={{...styles.input, borderBottomColor: theme.textColor, color: theme.textColor}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 2,
        fontSize: 20,
    },
    wrap: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#E7EAED',
    }
})