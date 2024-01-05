import React, { useState } from 'react';
//Components
import AppUI from './AppUI';
//CustomHooks
import useLocalStorage from './useLocalStorage';
//Archivo CSS
import './App.css';

function App() {

	//Estado de los Todos.
	const {item: todos, saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
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
		<AppUI
			completedTodos={completedTodos}
			totalTodos={totalTodos}
			searchValue={searchValue}
			setSearchValue={setSearchValue}
			searchedTodos={searchedTodos}
			completeTodo={completeTodo}
			deleteTodo={deleteTodo}
			error={error}
			loading={loading}
			// onError={() => console.log('Error')}

		/>
	);
}


export default App;
