import React, {useState} from 'react'
import {View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {ThemeImage} from "../components/ThemeImage";
import {List} from "../components/List/List";
import {Search} from "../components/Search";
import {getSearchTodos} from "../redux/actions/app-action";

export const SearchScreen = ({navigation, theme}) => {
    const loading = useSelector(state => state.app.isLoading)
    const allTodos = useSelector(state => state.app.allTodosList)
    const dispatch = useDispatch()
    const searchList = useSelector(state => state.app.searchList)
    const [searchQuery, setSearchQuery] = useState('')

    const changeSearchQuery = (query) => {
        setSearchQuery(query)
        dispatch(getSearchTodos(query))
    }

    if (loading) {
        return <ThemeImage theme={theme}/>
    }

    // if (!searchList || searchList.length === 0) {
    //     return <ThemeImage theme={theme}/>
    // }

    return (
        <View>
            <ThemeImage theme={theme}/>
            <Search changeSearchQuery={changeSearchQuery} searchQuery={searchQuery} theme={theme} />
            <List todos={!searchList ? allTodos : searchList} navigation={navigation} theme={theme}/>
        </View>

    );
}