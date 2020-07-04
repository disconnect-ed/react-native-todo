import React, {useEffect} from 'react'
import {useDispatch} from "react-redux";
import {getAllTodosList} from "../redux/actions/app-action";

export const Fetch = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllTodosList())
    }, [dispatch])
    return null
}