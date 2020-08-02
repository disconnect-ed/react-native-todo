import React, {useContext} from "react";
import {AuthContext} from "../Auth";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import firebaseConfig from "firebase";
import {Form, Formik} from "formik";
import {MyTextInput} from "../../common/Forms/Forms";
import * as Yup from 'yup';
import '../Auth.sass'

const Login = ({history, textColor, img}) => {
    const bgImg = {
        backgroundImage: `url(${img})`,
    }
    const inputStyle = {color: textColor, border: '2px solid ' + textColor}
    const {currentUser} = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/all"/>;
    }

    const validateError = (error) => {
        switch (error.code) {
            case 'auth/wrong-password':
                return 'Неверный адрес электронной почты или пароль'
            case 'auth/too-many-requests':
                return 'Слишком много неудачных попыток входа в систему. Пожалуйста, попробуйте позже.'
            default:
                return null
        }
    }

    return (
        <section style={bgImg} className='auth'>
            <div className="auth-form-wrap">
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Неккоректный Email')
                            .required('Обязательное поле'),
                        password: Yup.string()
                            .required('Обязательное поле')
                    })}
                    onSubmit={async (values, {setSubmitting, setStatus}) => {
                        try {
                            await firebaseConfig
                                .auth()
                                .signInWithEmailAndPassword(values.email, values.password);
                            history.push("/all");
                        } catch (error) {
                            console.log(error)
                            setStatus(validateError(error))
                        } finally {
                            setSubmitting(false);
                        }
                    }
                    }
                    render={({status}) => {
                        return (
                            <Form className='auth-form'>
                                <h2 className='auth-form__title' style={{color: textColor}}>Авторизация</h2>
                                <MyTextInput
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Email адрес"
                                    className='auth-form__input'
                                    style={inputStyle}
                                />
                                <MyTextInput
                                    label="Password"
                                    name="password"
                                    type="password"
                                    placeholder="Пароль"
                                    className='auth-form__input'
                                    style={inputStyle}
                                />
                                {!!status && <div className='auth-form__mainError'>{status}</div>}
                                <button style={{border: '2px solid ' + textColor, backgroundColor: textColor}}
                                        className='auth-form__button' type="submit">Войти
                                </button>
                                <div className="auth-form__link">
                                    <NavLink style={{color: textColor}} to='/signup'>Нету аккаунта?
                                        Зарегестрируйтесь!</NavLink>
                                </div>
                            </Form>
                        )
                    }}
                />
            </div>
        </section>
    )
}

export default withRouter(Login)