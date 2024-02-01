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

  // Función para ordenar por prioridad
  const sortByPriority = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      // Puedes ajustar la lógica de ordenación según tus necesidades
      const priorityOrder = { Baja: 3, Media: 2, Alta: 1 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    saveTodos(sortedTodos);
  };
  const sortByCompleted = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      // Puedes ajustar la lógica de ordenación según tus necesidades
      const completedOrder = { true: 1, false: 2 };
      return completedOrder[a.completed] - completedOrder[b.completed];
    });

    saveTodos(sortedTodos);
  };

  const sortByNonCompleted = () => {
    const sortedTodos = [...todos].sort((a, b) => {
      // Puedes ajustar la lógica de ordenación según tus necesidades
      const completedOrder = { true: 2, false: 1 };
      return completedOrder[a.completed] - completedOrder[b.completed];
    });

    saveTodos(sortedTodos);
  };

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
        <TodoContext.Provider value={{ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, error, loading, openModal, setOpenModal, addTodo, filteredValue, setFilteredValue, sortByPriority, sortByCompleted, sortByNonCompleted}}>

            {children}

        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };