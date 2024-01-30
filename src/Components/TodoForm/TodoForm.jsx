import React from 'react'
//Styles
import './TodoForm.css'
//Contexto
import { TodoContext } from '../../TodoContext/TodoContext';
const TodoForm = () => {

    const { setOpenModal, addTodo } = React.useContext(TodoContext);

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTODOValue);
        setOpenModal(false);
    }
    const onCancel = (e) => {
        setOpenModal(false);
    }

    const onChange = (e) => {
        setNewTODOValue(e.target.value);
    }

    const [newTODOValue, setNewTODOValue] = React.useState('');

    return (
        <div className="formBackground">
            <form onSubmit={onsubmit}
                className='newTODOForm'>
                <h2>Agrega una nueva tarea</h2>
                <textarea
                value={newTODOValue}
                onChange={onChange} 
                className='formTextarea' name="" placeholder='Agrega un nuevo Todo aqui ...' id="" cols="30" rows="10"></textarea>
                <div className="buttonFormContainer">
                    <button type='button' onClick={onCancel} className='cancelButton'>Cerrar</button>
                    <button type='submit' onClick={onSubmit} className='confirmButton'>Añadir TODO</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm