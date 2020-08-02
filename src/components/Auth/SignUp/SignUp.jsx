import React, {useContext} from 'react'
import firebaseConfig from "firebase";
import {NavLink, Redirect, withRouter} from "react-router-dom";
import * as Yup from 'yup';
import '../Auth.sass'
import {AuthContext} from "../Auth";
import {Form, Formik} from "formik";
import {MyTextInput} from "../../common/Forms/Forms";
import '../Auth.sass'

const SignUp = ({history, textColor, img}) => {
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
            case 'auth/email-already-in-use':
                return 'Адрес электронной почты уже используется другой учетной записью'
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
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Некорректный Email')
                            .required('Обязательное поле'),
                        password: Yup.string()
                            .required('Обязательное поле')
                            .min(6, 'Минимальная длина 6 символов'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password')], 'Пароли не совпадают')
                            .required('Обязательное поле')
                    })}
                    onSubmit={async (values, {setSubmitting, setStatus}) => {
                        try {
                            await firebaseConfig
                                .auth()
                                .createUserWithEmailAndPassword(values.email, values.password);
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
                        return <Form className='auth-form'>
                            <h2 className='auth-form__title' style={{color: textColor}}>Регистрация</h2>
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
                            <MyTextInput
                                label="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Подтвердите пароль"
                                className='auth-form__input'
                                style={inputStyle}
                            />
                            {!!status && <div className='auth-form__mainError'>{status}</div>}
                            <button style={{border: '2px solid ' + textColor, backgroundColor: textColor}}
                                    className='auth-form__button' type="submit">Регистрация
                            </button>
                            <div className="auth-form__link">
                                <NavLink style={{color: textColor}} to='/login'>Уже есть аккаунт? Войдите!</NavLink>
                            </div>
                        </Form>

                    }}/>
            </div>
        </section>
    );
};

export default withRouter(SignUp)