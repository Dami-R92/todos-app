import React, { Fragment } from 'react';
//Components
import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoItem from '../Components/TodoItem/TodoItem';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import CreateTodoButton from '../Components/CreateTodoButton/CreateTodoButton';


function AppUI({ completedTodos, totalTodos, searchValue, setSearchValue, searchedTodos, completeTodo, deleteTodo }) {
return (
    <Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch
            searchValue={searchValue} setSearchValue={setSearchValue}
        />
        <TodoList>
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
        <CreateTodoButton />
    </Fragment>
);
}
export default AppUI;