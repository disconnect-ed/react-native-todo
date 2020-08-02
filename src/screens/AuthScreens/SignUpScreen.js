import React from 'react'
import {ScrollView, Button, TouchableOpacity, View, Text, StyleSheet,} from 'react-native'
import {Formik} from "formik";
import {Input, MyTextInput} from "../../components/common/Forms";
import * as Yup from 'yup';
import firebaseConfig from "firebase";


export const SignUpScreen = ({theme, changeScreen}) => {
    const validateError = (error) => {
        switch (error.code) {
            case 'auth/email-already-in-use':
                return 'Адрес электронной почты уже используется другой учетной записью'
            default:
                return null
        }
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}>
            <View style={styles.wrap}>
                <Text style={{...styles.title, color: theme.textColor}}>Регистрация</Text>
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
                            .min(6, 'Минимальная длина 6 символов')
                            .required('Обязательное поле'),
                        confirmPassword: Yup.string()
                            .oneOf([Yup.ref('password')], 'Пароли не совпадают')
                            .required('Обязательное поле')
                    })}
                    onSubmit={async (values, {setSubmitting, setStatus}) => {
                        try {
                            await firebaseConfig
                                .auth()
                                .createUserWithEmailAndPassword(values.email, values.password);
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
                                   touched={touched.password}
                                   error={errors.password}
                                   theme={theme}
                                   secureTextEntry={true}
                                   autoCompleteType='off'
                                   label='Пароль'/>
                            <Input onChangeText={handleChange('confirmPassword')}
                                   onBlur={handleBlur('confirmPassword')}
                                   value={values.confirmPassword}
                                   touched={touched.confirmPassword}
                                   error={errors.confirmPassword}
                                   secureTextEntry={true}
                                   autoCompleteType='off'
                                   theme={theme}
                                   label='Подтверждение пароля'/>
                            {!!status &&
                            <View>
                                <Text style={styles.errorStatus}>{status}</Text>
                            </View>
                            }
                            <Button color={theme.textColor} onPress={handleSubmit} title="Регистрация"/>
                            <TouchableOpacity onPress={changeScreen}>
                                <Text style={{...styles.loginBtn, color: theme.textColor}}>Уже есть аккаунт?
                                    Войдите!</Text>
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
    loginBtn: {
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