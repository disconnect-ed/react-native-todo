export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const IS_PENDING = 'IS_PENDING'

let initialState = {
    currentUser: null,
    pending: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }
        case IS_PENDING:
            return {
                ...state,
                pending: action.pending
            }
        default:
            return state
    }
}