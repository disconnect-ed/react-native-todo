import React from 'react'
import {CreateAndEdit} from "../components/CreateAndEdit/CreateAndEdit";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/app-action";

export const CreateScreen = ({navigation, theme}) => {
    const dispatch = useDispatch()
    const complete = (todo) => {
        dispatch(addTodo(todo))
        return navigation.popToTop()
    }

    return (
        <CreateAndEdit complete={complete} theme={theme}/>
    );
}