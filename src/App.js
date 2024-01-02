import React from 'react';
import './App.css';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoSearch from './Components/TodoSearch/TodoSearch';
import TodoList from './Components/TodoList/TodoList';
import CreateTodoButton from './Components/CreateTodoButton/CreateTodoButton';
import { Fragment, useState } from 'react';

const defaultTodos = [
	{ text: 'cortar cebollas', completed: false },
	{ text: 'terminar curso de ReactJS', completed: false },
	{ text: 'comprar panchitos', completed: true },
	{ text: 'comprar lechuga', completed: true },
	{ text: 'Atornillar el taparrollos', completed: false },
	{ text: 'Comprar Off', completed: false },

];

function App() {
	//Estado de los Todos.
	const [todos, setTodos] = React.useState(defaultTodos);

	//Estado de la busqueda.
	const [searchValue, setSearchValue] = React.useState('');
	// console.log('ususarios buscan todos de ' + searchValue);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searcText = searchValue.toLowerCase();
		return todoText.includes(searcText)
	});

	const completeTodo = (text)=> {
		const newTodos = [...todos];
		const todoIndex =  newTodos.findIndex(
			(todo)=> todo.text == text
			);
		newTodos[todoIndex].completed = true;
		setTodos(newTodos);
	};
	const deleteTodo = (text)=> {
		const newTodos = [...todos];
		const todoIndex =  newTodos.findIndex(
			(todo)=> todo.text == text
			);
		newTodos.splice(todoIndex,1);
		setTodos(newTodos);
	};

	

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
					onComplete={()=> completeTodo(todo.text)}
					onDelete= {()=> deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</Fragment>
	);
}


export default App;
