import {
    DELETE_TODO,
    GET_FAVORITE_LIST,
    GET_URGENT_LIST,
    IS_LOADING,
    SET_EDIT_TODO, SET_SEARCH_QUERY, SET_SEARCH_TODOS, SET_THEME,
    SET_TODO, SET_ALL_TODOS_LIST, SET_UPDATE_TODO,
    WATCH_TODO
} from "../reducers/app-reducer";
import {appAPI} from "../../api/api";

export const setTheme = (theme) => dispatch => dispatch({type: SET_THEME, theme})

export const setTodo = (newTodo) => ({type: SET_TODO, newTodo})
export const goDeleteTodo = (todoId) => ({type: DELETE_TODO, todoId})
export const setEditTodo = (todoId) => ({type: SET_EDIT_TODO, todoId})
export const setUpdateTodo = (updateTodo) => ({type: SET_UPDATE_TODO, updateTodo})
export const setAllTodosList = (todoList) => ({type: SET_ALL_TODOS_LIST, todoList})
export const getTodo = (todoId) => ({type: WATCH_TODO, todoId})
export const setSearchTodos = (searchQuery) => ({type: SET_SEARCH_TODOS, searchQuery})
export const setSearchQuery = (searchQuery) => ({type: SET_SEARCH_QUERY, searchQuery})
export const setFavoriteList = () => ({type: GET_FAVORITE_LIST})
export const setUrgentList = () => ({type: GET_URGENT_LIST})
export const isLoading = (bool) => ({type: IS_LOADING, bool})


export const getAllTodosList = () => {

    return dispatch => {
        dispatch(isLoading(true))
        appAPI.getAllTodosList().then(
            result => {
                if (!result.data) {
                    dispatch(setAllTodosList([]))
                    dispatch(isLoading(false))
                    return
                }
                const todos = Object.keys(result.data).map(key => ({...result.data[key], id: key}))
                dispatch(setAllTodosList(todos))
                dispatch(isLoading(false))
            },
            error => {
                dispatch(isLoading(false))
                alert('При загрузке дел произошла ошибка!')
            }
        )
    }
}

export const deleteTodo = (todoId) => {
    return dispatch => {
        dispatch(isLoading(true))
        appAPI.deleteTodo(todoId).then(
            result => {
                console.log(result)
                dispatch(goDeleteTodo(todoId))
                dispatch(isLoading(false))
            },
            error => {
                dispatch(isLoading(false))
                alert('При удалении дела произошла ошибка!')
            }
        )

    }
}

export const getEditTodo = (todoId) => {
    return dispatch => {
        dispatch(setEditTodo(todoId))
    }
}

export const updateTodo = (todo) => {
    return dispatch => {
        appAPI.updateTodo(todo).then(
            response => {
                dispatch(setUpdateTodo(todo))
                // dispatch(setEditTodo(null))
            }
        )
    }
}

export const addTodo = (todo) => {
    const date = new Date()
    const createDate = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const newTodo = {
        date: createDate.toString(),
        ...todo
    }
    return dispatch => {
        appAPI.addTodo(newTodo).then(
            result => {
                dispatch(setTodo({...newTodo, id: result.data.name}))
                dispatch(getFavoriteList())
                dispatch(getUrgentList())
            },
            error => alert('При добавлении дела произошла ошибка!')
        )

    }
}


export const getFavoriteList = () => {
    return dispatch => {
        dispatch(isLoading(true))
        dispatch(setFavoriteList())
        dispatch(isLoading(false))

    }
}

export const getUrgentList = () => {
    return dispatch => {
        dispatch(isLoading(true))
        dispatch(setUrgentList())
        dispatch(isLoading(false))

    }
}

export const watchTodo = (todoId) => {

    return dispatch => {
        dispatch(isLoading(true))
        dispatch(getTodo(todoId))
        dispatch(isLoading(false))

    }
}

export const getSearchTodos = (searchQuery) => {
    return dispatch => {
        dispatch(isLoading(true))
        dispatch(setSearchTodos(searchQuery))
        dispatch(isLoading(false))
    }
}

export const getSearchQuery = (searchQuery) => {
    return dispatch => {
        dispatch(setSearchQuery(searchQuery))
    }
}

