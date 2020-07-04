import React, {useState} from 'react'
import {CreateAndEdit} from "../components/CreateAndEdit/CreateAndEdit";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/actions/app-action";

export const CreateScreen = ({navigation, theme}) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [favorite, setFavorite] = useState(false)
    const [urgent, setUrgent] = useState(false)
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
        setTitle('')
        setText('')
        dispatch(addTodo(todoTitle, todoText, favorite, urgent))
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