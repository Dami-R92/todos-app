import React, { Fragment } from 'react';
//Components
import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoItem from '../Components/TodoItem/TodoItem';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import CreateTodoButton from '../Components/CreateTodoButton/CreateTodoButton';

import EmptyTodos from '../Components/EmptyTodos/EmptyTodos.jsx';
import TodosError from '../Components/TodosError/TodosError.jsx';
import TodosLoading from '../Components/TodosLoading/TodosLoading.jsx';
//Contexto
import { TodoContext } from '../TodoContext/TodoContext.jsx';




function AppUI() {

    const {
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        error,
        loading, } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <CreateTodoButton />
            <TodoSearch />

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && totalTodos < 1) && <EmptyTodos />}
                {(!loading && searchedTodos.length < 1 && totalTodos > 1) && <h1> Parece que no hay coincidencias!</h1>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

        </>
    );
}
export default AppUI;