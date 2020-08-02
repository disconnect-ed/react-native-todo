import React from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, Button} from 'react-native'
import {ThemeImage} from "../ThemeImage";
import * as Yup from "yup";
import {MyCheckbox} from "../common/Forms";
import {Formik} from "formik";

export const CreateAndEdit = ({theme, complete, editTodoData}) => {
    return (
        <View style={{backgroundColor: 'white'}}>
            <ThemeImage theme={theme}/>
            <ScrollView style={styles.wrap}>
                <Formik
                    initialValues={{
                        title: editTodoData ? editTodoData.title : '',
                        text: editTodoData ? editTodoData.text : '',
                        favorite: editTodoData ? editTodoData.favorite : false,
                        urgent: editTodoData ? editTodoData.urgent : false
                    }}
                    validationSchema={Yup.object({
                        title: Yup.string()
                            .trim('Заголовок должен содержать символы')
                            .max(50, 'Максимальная длина заголовка 50 символов')
                            .required('Обязательное поле'),
                        text: Yup.string()
                            .trim('Описание должен содержать символы')
                            .max(300, 'Максимальная длина описания 300 символов')
                            .required('Обязательное поле')
                    })}
                    onSubmit={async (values, {setSubmitting}) => {
                        try {
                            const todo = {
                                ...editTodoData,
                                title: values.title,
                                text: values.text,
                                favorite: values.favorite,
                                urgent: values.urgent
                            }
                            complete(todo)
                        } catch (error) {
                            console.log(error)
                        } finally {
                            setSubmitting(false);
                        }
                    }
                    }
                >
                    {({handleChange, setFieldValue, handleBlur, handleSubmit, values, touched, errors}) => (
                        <View>
                            <View style={styles.container}>
                                <Text style={{...styles.title, color: theme.textColor}}>
                                    Заголовок
                                </Text>
                                {errors.title && touched.title &&
                                <Text style={{color: 'red'}}>
                                    {errors.title}
                                </Text>}
                                <TextInput value={values.title}
                                           onBlur={handleBlur('title')}
                                           placeholder='Заголовок дела...'
                                           onChangeText={handleChange('title')}
                                           style={{
                                               ...styles.input,
                                               color: theme.textColor,
                                               borderBottomColor: theme.textColor
                                           }}/>
                            </View>
                            <View style={styles.container}>
                                <Text style={{...styles.title, color: theme.textColor}}>
                                    Описание
                                </Text>
                                {errors.text && touched.text &&
                                <Text style={{color: 'red'}}>
                                    {errors.text}
                                </Text>}
                                <TextInput multiline value={values.text}
                                           onChangeText={handleChange('text')}
                                           onBlur={handleBlur('text')}
                                           numberOfLines={5}
                                           placeholder='Описание дела...'
                                           style={{
                                               ...styles.textArea,
                                               color: theme.textColor,
                                               borderBottomColor: theme.textColor
                                           }}/>
                            </View>
                            <View style={styles.container}>
                                <Text style={{...styles.title, color: theme.textColor, marginBottom: 20}}>
                                    Действия
                                </Text>
                                <MyCheckbox name='favorite' text='Избранное' theme={theme}
                                            onPress={() => setFieldValue('favorite', !values.favorite)}
                                            icon='star' param={values.favorite}/>
                                <MyCheckbox name='urgent' text='Срочное' theme={theme}
                                            onPress={() => setFieldValue('urgent', !values.urgent)}
                                            icon='fire' param={values.urgent}/>
                            </View>
                            <View style={{...styles.container}}>
                                <Button onPress={handleSubmit} color={theme.textColor} title='ЗАВЕРШИТЬ'/>
                            </View>
                        </View>
                    )}
                </Formik>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,

    },
    input: {
        borderBottomWidth: 2,
        width: '100%',
        fontSize: 20,
        lineHeight: 40,
        height: 40
    },
    textArea: {
        borderBottomWidth: 2,
        fontSize: 20
    },
    wrap: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 100
    },
    container: {
        marginBottom: 30
    },
    action: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    actionIcon: {},
    actionText: {
        fontSize: 20,

    },
    checkbox: {
        width: 20,
        padding: 0
    }
})