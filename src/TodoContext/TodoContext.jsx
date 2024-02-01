import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage.jsx'

const TodoContext = React.createContext();

function TodoProvider({children}) {
    //Estado de los Todos.
    const { item: todos, saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    //Estado de la busqueda.
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;
    
    const [filteredValue, setFilteredValue] = useState('Todas');
    const searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        const todoPriority = todo.priority;
        const searchPriority = filteredValue;
        
        
        if(filteredValue === 'Todas'){
            return todoText.includes(searchText)
        }else {
           return todoPriority.includes(searchPriority) && todoText.includes(searchText)
        }
    });

    //! VAriables en edicion


    // const filteredTodos = todos.filter((todo) => {
    //     const todoPriority = todo.priority;
    //     const searchPriority = filteredValue;
    //     return todoPriority.includes(searchPriority)
    // });

    // const filteredTodos = ()=> {
    //     if(filteredValue === 'Todas'){
    //         return searchedTodos
    //     }else {
    //        return searchedTodos.filter(todo => todo.priority === filteredValue);
    //     }
    // }

        //! VAriables en edicion
    const addTodo = (text, priority) => {
        const newTodos = [...todos];
        newTodos.push({
            text: text,
            priority: priority,
            completed: false,
        })
        saveTodos(newTodos);
    }

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
        <TodoContext.Provider value={{ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, error, loading, openModal, setOpenModal, addTodo, filteredValue, setFilteredValue}}>

            {children}

        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };