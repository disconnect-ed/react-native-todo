import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "./reducers/auth-reducer";


let reducers = combineReducers({
    app: appReducer,
    auth: authReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

