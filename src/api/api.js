import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://react-native-todo-83266.firebaseio.com/todos',
});

export const appAPI = {
    addTodo(newTodo) {
        return instance.post('.json', newTodo)
    },
    getAllTodosList() {
        return instance.get('.json')
    },
    updateTodo(updateTodo) {
        return instance.patch(`/${updateTodo.id}.json`, updateTodo)
    },
    deleteTodo(todoId) {
        return instance.delete(`/${todoId}.json`)
    }
}

