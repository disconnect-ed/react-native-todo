import React, {useEffect, useState} from "react";
import app from '../../../base';
import {useDispatch, useSelector} from "react-redux";
import {isPending, setCurrentUser} from "../../redux/actions/auth-action";
import {AppPreloader} from "../common/AppPreloader";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const pending = useSelector(state => state.auth.pending)
    const dispatch = useDispatch()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            dispatch(setCurrentUser(user))
            dispatch(isPending(false))
        });
    }, []);

    if (pending) {
        return <AppPreloader/>
    }
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};