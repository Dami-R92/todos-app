import React from 'react';
import './App.css';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoSearch from './Components/TodoSearch/TodoSearch';
import TodoList from './Components/TodoList/TodoList';
import CreateTodoButton from './Components/CreateTodoButton/CreateTodoButton';
import { Fragment, useState } from 'react';

// const defaultTodos = [
// 	{ text: 'cortar cebollas', completed: false },
// 	{ text: 'terminar curso de ReactJS', completed: false },
// 	{ text: 'comprar panchitos', completed: true },
// 	{ text: 'comprar lechuga', completed: true },
// 	{ text: 'Atornillar el taparrollos', completed: false },
// 	{ text: 'Comprar Off', completed: false },
	
// ];
// const stringifiedTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('LIST_V1', stringifiedTodos);
	
	// localStorage.removeItem('LIST_V1')

function App() {

	// const stringifiedTodos = JSON.stringify(defaultTodos);
	// localStorage.setItem('LIST_V1', stringifiedTodos);

	const localStorageTodos = localStorage.getItem('LIST_V1');

	let parsedTodos;
	if(!localStorageTodos) {
		localStorage.setItem('LIST_V1', JSON.stringify([]));
	parsedTodos = [];
	}else {
		parsedTodos = JSON.parse(localStorageTodos);
	}




	//Estado de los Todos.
	const [todos, setTodos] = useState(parsedTodos);

	//Estado de la busqueda.
	const [searchValue, setSearchValue] = useState('');
	// console.log('ususarios buscan todos de ' + searchValue);

	const completedTodos = todos.filter((todo) => !!todo.completed).length;
	const totalTodos = todos.length;

	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searcText = searchValue.toLowerCase();
		return todoText.includes(searcText)
	});

	const saveTodos = (newTodos) => {
		localStorage.setItem('LIST_V1', JSON.stringify(newTodos));
		setTodos(newTodos);
	}


	const completeTodo = (text)=> {
		const newTodos = [...todos];
		const todoIndex =  newTodos.findIndex(
			(todo)=> todo.text === text
			);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (text)=> {
		const newTodos = [...todos];
		const todoIndex =  newTodos.findIndex(
			(todo)=> todo.text === text
			);
		newTodos.splice(todoIndex,1);
		saveTodos(newTodos);
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
