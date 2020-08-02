import React, {useReducer} from 'react'
import {ScreenContext} from './screenContext'
import {screenReducer} from './screenReducer'
import {CHANGE_SCREEN} from "../types";

export const ScreenState = ({children}) => {
    const initialState = {
        todoId: null
    }
    const [state, dispatch] = useReducer(screenReducer, initialState)

    const changeScreen = id => dispatch({type: CHANGE_SCREEN, id})

    return <ScreenContext.Provider value={{
        changeScreen, todoId: state.todoId
    }}>{children}</ScreenContext.Provider>
}
