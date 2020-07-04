import React from 'react'
import {Text, SafeAreaView, FlatList, View, Image, StyleSheet, Button, Alert} from 'react-native'
import {ListItem} from "./ListItem";
import {AppButton} from "../AppButton";
import {useDispatch} from "react-redux";
import {getAllTodosList} from "../../redux/actions/app-action";
import {ThemeImage} from "../ThemeImage";


export const List = ({theme, todos, navigation}) => {

    const dispatch = useDispatch()
    const updateTodosLists = () => {
        dispatch(getAllTodosList())
    }
    const onLongPress = (item) => {
        Alert.alert(
            'Информация дела',
            `Полное название: "${item.title}"\n\nДата создания: ${item.date}`,
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ],
            { cancelable: false }
        );
    }
    return (
        <View>
            <ThemeImage theme={theme}/>
            <View style={styles.btnWrap}>
                <AppButton onPress={updateTodosLists} icon='sync' theme={theme} title='Обновить'/>
                <AppButton theme={theme} icon='search' title='Поиск'/>
            </View>
                <FlatList data={todos}
                          style={styles.list}
                          renderItem={({ item }) => <ListItem onLongPress={onLongPress}
                                                              navigation={navigation}
                                                              theme={theme} item={item} />}
                          keyExtractor={item => item.id}/>


        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: '100%'
    },
    list: {
        marginTop: 50,
        marginBottom: 100
    },
    btnWrap: {
      flex: 1,
      flexDirection: 'row'
    },
    btn: {
        height: 50,
        lineHeight: 50,
        width: '50%'
    }
})