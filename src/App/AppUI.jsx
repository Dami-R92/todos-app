import React, { Fragment } from 'react';
//Components
import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoItem from '../Components/TodoItem/TodoItem';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import CreateTodoButton from '../Components/CreateTodoButton/CreateTodoButton';


function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo, error, loading }) {
return (
    <Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
            searchValue={searchValue} setSearchValue={setSearchValue}
        />
        <TodoList>
            {loading && <h1>Cargando...</h1>}
            {error && <h1>Hubo un error!</h1>}
            {/* {
            console.log(loading, error, totalTodos, searchedTodos.length)
            } */}
            {(!loading && totalTodos< 1) && <h1>Crea tu primer TODO!</h1>}
            {(!loading && searchedTodos.length < 1 && totalTodos > 1) && <h1> Parece que no hay coincidencias!</h1>}
            { searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton />
    </Fragment>
);
}
export default AppUI;