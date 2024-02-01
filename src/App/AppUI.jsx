import React, { Fragment } from 'react';
//Components
import TodoCounter from '../Components/TodoCounter/TodoCounter';
import TodoItem from '../Components/TodoItem/TodoItem';
import TodoSearch from '../Components/TodoSearch/TodoSearch';
import TodoList from '../Components/TodoList/TodoList';
import CreateTodoButton from '../Components/CreateTodoButton/CreateTodoButton';
import TodoForm from '../Components/TodoForm/TodoForm.jsx';
import Modal from '../Modal/Modal';

import EmptyTodos from '../Components/EmptyTodos/EmptyTodos.jsx';
import TodosError from '../Components/TodosError/TodosError.jsx';
import TodosLoading from '../Components/TodosLoading/TodosLoading.jsx';
//Contexto
import { TodoContext } from '../TodoContext/TodoContext.jsx';

import Select from 'react-select';


function AppUI() {

    const {
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        error,
        loading,
        openModal,
        setOpenModal,
        searchValue,
        setSearchValue,
        filteredValue,
        setFilteredValue,
        sortByPriority,
        sortByCompleted,
        sortByNonCompleted,
    } = React.useContext(TodoContext);

    const priorityOptions = ['Todas','Alta', 'Media', 'Baja' ];

    const handleSelectChange = (e) => {
        setFilteredValue(e.value);
    }
    const orderOptions = ['Prioridad','Completas','Incompletas','Fecha' ];
    const handleOrderChange = (e) => {
        if(e.value === 'Prioridad'){
            sortByPriority();
        } else if ( e.value === 'Completas'){
            sortByCompleted();
        } else if (e.value === 'Incompletas'){
            sortByNonCompleted();
        }
    }

    return (
        <>
        <section className='triangle'>
            <TodoCounter />
            <CreateTodoButton />
            <div className="toolsContainer">
            <TodoSearch />
            <div className="selectToolContainer">
            <h5>Prioridad: </h5>
            <Select options={priorityOptions.map((priority) => ({ label: priority, value: priority }))} onChange={handleSelectChange} />
            <h5>Ordenar por: </h5>
            <Select options={orderOptions.map((order) => ({ label: order, value: order }))} onChange={handleOrderChange}/>
            </div>
            </div>
        </section>

            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && totalTodos < 1) && <EmptyTodos />}
                {(!loading && searchedTodos.length < 1 && totalTodos > 1) && <h3 className='noMatch'> No se encontraron tareas relacionadas </h3>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        priority={todo.priority}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )
            }
        </>
    );
}
export default AppUI;