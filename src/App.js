import './App.css';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoSearch from './Components/TodoSearch/TodoSearch';
import TodoList from './Components/TodoList/TodoList';
import CreateTodoButton from './Components/CreateTodoButton/CreateTodoButton';
import { Fragment } from 'react';

const defaultTodos = [
{text: 'cortar cebollas', completed: false},
{text: 'terminar curso de ReactJS', completed: false},
{text: 'comprar panchitos', completed: true},
{text: 'comprar lechuga', completed: false},

];

function App() {

	var defaultTodosCompleted = 0;
	
	defaultTodos.forEach(e => {
		if(e.completed == true) {
		defaultTodosCompleted = defaultTodosCompleted +1;
		console.log(defaultTodosCompleted);
		}
	});

	return (
		<Fragment>
			<TodoCounter completed={defaultTodosCompleted} total={defaultTodos.length} />
			<TodoSearch />
			<TodoList>
				{defaultTodos.map(todo => (
					<TodoItem key={todo.text} text = {todo.text} completed = {todo.completed} />
					))}
			</TodoList>
			<CreateTodoButton />
		</Fragment>
	);
}


export default App;
