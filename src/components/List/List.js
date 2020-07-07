import React from 'react'
import {Text, SafeAreaView, FlatList, View, Image, StyleSheet, Button, Alert} from 'react-native'
import {ListItem} from "./ListItem";
import {AppButtons} from "../AppButtons";
import {useDispatch} from "react-redux";
import {getAllTodosList} from "../../redux/actions/app-action";
import {ThemeImage} from "../ThemeImage";


export const List = ({theme, todos, navigation}) => {


    const onLongPress = (item) => {
        Alert.alert(
            'Информация дела',
            `Полное название: "${item.title}"\n\nДата создания: ${item.date}`,
            [
                {text: 'OK'}
            ],
            {cancelable: false}
        );
    }
    return (

            <FlatList data={todos}
                      style={styles.list}
                      renderItem={({item}) => <ListItem onLongPress={onLongPress}
                                                        navigation={navigation}
                                                        theme={theme} item={item}/>}
                      keyExtractor={item => item.id}/>

    )
}

const styles = StyleSheet.create({
    // img: {
    //     height: 100,
    //     width: '100%'
    // },
    list: {
        marginBottom: 150
    },
    // btnWrap: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },
    // btn: {
    //     height: 50,
    //     lineHeight: 50,
    //     width: '50%'
    // }
})