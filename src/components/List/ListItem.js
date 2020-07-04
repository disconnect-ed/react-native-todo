import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons';

export const ListItem = ({theme, item, onLongPress, navigation}) => {
    const textColor = item.urgent ? 'white' : theme.textColor
    const bg = item.urgent ? theme.textColor : 'white'
    return (
        <TouchableOpacity activeOpacity={0.5}
                          onLongPress={() => onLongPress(item)}
                          onPress={() => {
                              navigation.navigate('View', {
                                  item
                              })
                          }}
        >
            <View style={{...styles.item, backgroundColor: bg}}>
                <Text style={styles.icon}>
                    {item.favorite &&
                    <FontAwesome name="star" size={16} color={textColor}/>
                    }
                </Text>
                <Text style={{...styles.text, color: textColor}}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>


    )
}

const styles = StyleSheet.create({
    item: {
        height: 50,
        width: '100%',
        borderBottomColor: '#E7EAED',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        lineHeight: 50,
        textTransform: 'uppercase',
        fontSize: 16
    },
    icon: {
        width: 50,
        lineHeight: 50,
        textAlign: 'center'
    }
})