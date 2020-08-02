import React, {useState, useEffect, useContext, useCallback} from 'react'
import {FlatList, StyleSheet, View, Image, Dimensions} from 'react-native'
import {AddTodo} from "../../components/AddTodo/AddTodo";
import {Todo} from "../../components/Todo/Todo";
import img from '../../../assets/file.png'
import {THEME} from "../../utils/theme";
import {TodoContext} from "../../context/todo/TodoContext";
import {ScreenContext} from "../../context/screen/screenContext";
import {AppLoader} from "../../components/AppLoader/AppLoader";
import {AppText} from "../../components/AppText/AppText";
import {AppButton} from "../../components/AppButton/AppButton";

export const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext)
    const {changeScreen} = useContext(ScreenContext)
    const [widthDevice, setWidthDevice] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos])

    useEffect(() => {
        loadTodos()
    }, [])

    useEffect(() => {
        const update = () => {
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2
            setWidthDevice(width)
        }
        Dimensions.addEventListener('change', update)

        return () => {
            Dimensions.removeEventListener('change', update)
        }
    })

    let content = (
        <View style={{width: widthDevice}} >
            <FlatList data={todos} style={styles.list}
                      keyExtractor={item => item.id.toString()}
                      renderItem={({item}) => <Todo onOpen={changeScreen} onRemove={removeTodo} todo={item}/>}/>
        </View>
    )

    if (!todos.length) {
        content = <View style={styles.imgWrap}>
            <Image style={styles.img} source={img} />
        </View>
    }

    if (loading) {
        return <AppLoader/>
    }

    if (error) {
        return <View style={styles.center}>
            <AppText style={styles.error}>{error}</AppText>
            <AppButton onPress={loadTodos}>Повторить</AppButton>
        </View>
    }


    return (
        <View>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 20,
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    img: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    error: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
        marginBottom: 25
    }
})