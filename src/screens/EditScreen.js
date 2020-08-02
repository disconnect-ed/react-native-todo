import React from 'react'
import {CreateAndEdit} from "../components/CreateAndEdit/CreateAndEdit";
import {useDispatch, useSelector} from "react-redux";
import {updateTodo} from "../redux/actions/app-action";

export const EditScreen = ({navigation, theme}) => {

    const dispatch = useDispatch()
    const editTodoData = useSelector(state => state.app.editTodo)
    const complete = (todo) => {
        dispatch(updateTodo(todo))
        return navigation.popToTop()
    }

    return (
        <CreateAndEdit complete={complete}
                       editTodoData={editTodoData}
                       theme={theme}/>
    );
}