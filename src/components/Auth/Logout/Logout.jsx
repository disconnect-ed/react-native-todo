import React from 'react'
import firebaseConfig from "firebase";
import '../Auth.sass'

export const Logout = ({textColor}) => {
    return (
        <button style={{border: '2px solid ' + textColor, backgroundColor: textColor}} className='auth-form__button'
                onClick={() => firebaseConfig.auth().signOut()}>Выйти</button>
    )
}