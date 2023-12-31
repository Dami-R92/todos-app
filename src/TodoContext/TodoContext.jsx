import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage.jsx'

const TodoContext = React.createContext();

function TodoProvider({children}) {
    //Estado de los Todos.
    const { item: todos, saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    //Estado de la busqueda.
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
    });

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return (
        <TodoContext.Provider value={{ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, error, loading}}>

            {children}

        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };