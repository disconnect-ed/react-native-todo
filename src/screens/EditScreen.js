import React, {useState} from 'react'
import {CreateAndEdit} from "../components/CreateAndEdit/CreateAndEdit";
import {useDispatch, useSelector} from "react-redux";
import {updateTodo} from "../redux/actions/app-action";

export const EditScreen = ({navigation, theme}) => {

    const dispatch = useDispatch()
    const editTodoData = useSelector(state => state.app.editTodo)
    const [title, setTitle] = useState(editTodoData.title)
    const [text, setText] = useState(editTodoData.text)
    const [favorite, setFavorite] = useState(editTodoData.favorite)
    const [urgent, setUrgent] = useState(editTodoData.urgent)
    const [errorTitle, setErrorTitle] = useState(null)
    const [errorText, setErrorText] = useState(null)
    const complete = (e) => {
        let todoTitle = title
        let todoText = text
        todoTitle = todoTitle.trim()
        todoText = todoText.trim()
        if (!todoTitle) {
            return setErrorTitle('Обязательное поле')
        }
        if (todoTitle.length > 50) {
            return setErrorTitle('Максимальная длина заголовка 50 символов')
        }
        setErrorTitle(null)
        if (todoText.length > 300) {
            return setErrorText('Максимальная длина описания 300 символов')
        }
        setErrorText(null)
        let todo = {...editTodoData}
        todo.title = todoTitle
        todo.text = todoText
        todo.favorite = favorite
        todo.urgent = urgent
        dispatch(updateTodo(todo))
        return navigation.popToTop()
    }

    return (
        <CreateAndEdit title={title} setTitle={setTitle}
                       text={text} setText={setText}
                       favorite={favorite} setFavorite={setFavorite}
                       urgent={urgent} setUrgent={setUrgent}
                       complete={complete}
                       errorTitle={errorTitle}
                       errorText={errorText}
                       theme={theme}/>
    );
}