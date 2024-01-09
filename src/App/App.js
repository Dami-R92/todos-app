import React from 'react';
//Components
import AppUI from './AppUI';

//Archivo CSS
import './App.css';
import { TodoProvider } from '../TodoContext/TodoContext';

function App() {
	return (
		<TodoProvider>
			<AppUI />
		</TodoProvider>
	);
}


export default App;
