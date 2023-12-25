import logo from './platzi.webp';
import './App.css';
import TodoCounter from './Components/TodoCounter/TodoCounter';
import TodoItem from './Components/TodoItem/TodoItem';
import TodoSearch from './Components/TodoSearch/TodoSearch';
import TodoList from './Components/TodoList/TodoList';
import CreateTodoButton from './Components/CreateTodoButton/CreateTodoButton';

function App() {
  return (
    <div className="App">
      <TodoCounter completed={16} total={20}/>
      <TodoSearch />
      <TodoList>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>
      <CreateTodoButton />
    </div>
  );
}


export default App;
 