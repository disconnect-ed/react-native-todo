import React from 'react'
import {Button, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {Formik} from "formik";
import {Input} from "../../components/common/Forms";
import * as Yup from 'yup';
import firebaseConfig from "firebase";


export const LoginScreen = ({theme, changeScreen}) => {
    const validateError = (error) => {
        switch (error.code) {
            case 'auth/wrong-password':
                return 'Неверный адрес электронной почты или пароль'
            case 'auth/too-many-requests':
                return 'Слишком много неудачных попыток входа в систему. Пожалуйста, попробуйте позже.'
            case 'auth/user-not-found':
                return 'Пользователя не существует или он был удален'
            default:
                return null
        }
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.wrap}>
                <Text style={{...styles.title, color: theme.textColor}}>Авторизация</Text>
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
                        } catch (error) {
                            setStatus(validateError(error))
                        } finally {
                            setSubmitting(false);
                        }
                    }
                    }
                >
                    {({handleChange, handleBlur, handleSubmit, values, status, touched, errors}) => (
                        <View style={styles.form}>
                            <Input onChangeText={handleChange('email')}
                                   onBlur={handleBlur('email')}
                                   value={values.email}
                                   touched={touched.email}
                                   error={errors.email}
                                   theme={theme}
                                   label='Почта'/>
                            <Input onChangeText={handleChange('password')}
                                   onBlur={handleBlur('password')}
                                   value={values.password}
                                   autoCompleteType='off'
                                   touched={touched.password}
                                   error={errors.password}
                                   theme={theme}
                                   secureTextEntry={true}
                                   label='Пароль'/>
                            {!!status &&
                            <View>
                                <Text style={styles.errorStatus}>{status}</Text>
                            </View>
                            }
                            <Button color={theme.textColor} onPress={handleSubmit} title="Войти"/>
                            <TouchableOpacity onPress={changeScreen}>
                                <Text style={{...styles.signUpBtn, color: theme.textColor}}>Нету аккаунта?
                                    Зарегистрируйтесь!</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25
    },
    errorStatus: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        marginTop: 10
    },
    signUpBtn: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 30
    },
    form: {
        width: '80%'
    },
    title: {
        fontSize: 30,
        marginBottom: 50
    }
})