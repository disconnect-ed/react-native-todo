import {applyMiddleware, combineReducers, createStore} from "redux";
import {appReducer} from "./reducers/app-reducer";
import thunkMiddleware from 'redux-thunk'


let reducers = combineReducers({
    app: appReducer
});

export let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

