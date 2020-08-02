import {IS_PENDING, SET_CURRENT_USER} from "../reducers/auth-reducer";


export const setCurrentUser = (currentUser) => {
    return dispatch => {
        dispatch({
            type: SET_CURRENT_USER,
            currentUser
        })
    }
}

export const isPending = (pending) => {
    return dispatch => {
        dispatch({
            type: IS_PENDING,
            pending
        })
    }
}