export const SET_TODO = 'SET_TODO'
export const WATCH_TODO = 'WATCH_TODO'
export const IS_LOADING = 'IS_LOADING'
export const SET_UPDATE_TODO = 'SET_UPDATE_TODO'
export const GET_FAVORITE_LIST = 'GET_FAVORITE_LIST'
export const GET_URGENT_LIST = 'GET_URGENT_LIST'
export const SET_SEARCH_TODOS = 'SET_SEARCH_TODOS'
export const SET_ALL_TODOS_LIST = 'SET_ALL_TODOS_LIST'
export const SET_EDIT_TODO = 'SET_EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const SET_THEME = 'SET_THEME'

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'


let initialState = {
    allTodosList: [],
    todo: null,
    isLoading: true,
    favoriteList: null,
    urgentList: null,
    searchList: null,
    searchQuery: '',
    editTodo: null,
    theme: null
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                allTodosList: [{...action.newTodo}, ...state.allTodosList]
            }
        case SET_THEME:
            return {
                ...state,
                theme: action.theme
            }
        case DELETE_TODO:
            return {
                ...state,
                allTodosList: state.allTodosList.filter(todo => todo.id !== action.todoId)
            }
        case SET_UPDATE_TODO:
            return {
                ...state,
                allTodosList: state.allTodosList.map(todo => {
                    if (todo.id === action.updateTodo.id) {
                        todo = action.updateTodo
                    }
                    return todo
                })
            }
        case SET_EDIT_TODO:
            return {
                ...state,
                editTodo: state.allTodosList.find(todo => action.todoId === todo.id)
            }
        case SET_ALL_TODOS_LIST:

            return {
                ...state,
                allTodosList: action.todoList.reverse(),
                // favoriteList: action.todoList.filter(todo => todo.favorite),
                // urgentList: action.todoList.filter(todo => todo.urgent)
            }
        case WATCH_TODO:
            const todoItem = state.allTodosList.find(todo => todo.id === action.todoId)
            return {
                ...state,
                todo: todoItem
            }
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.bool
            }
        case GET_FAVORITE_LIST:
            return {
                ...state,
                favoriteList: state.allTodosList.filter(todo => todo.favorite)
            }
        case GET_URGENT_LIST:
            return {
                ...state,
                urgentList: state.allTodosList.filter(todo => todo.urgent)
            }
        case SET_SEARCH_TODOS:
            return {
                ...state,
                searchList: state.allTodosList.filter(o => o.title.toLowerCase().indexOf(action.searchQuery.toLowerCase()) >= 0)

            }
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        default:
            return state
    }
}