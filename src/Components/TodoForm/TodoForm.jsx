import React from 'react'
//Styles
import './TodoForm.css'
//Contexto
import { TodoContext } from '../../TodoContext/TodoContext';
const TodoForm = () => {

    const { setOpenModal } = React.useContext(TodoContext);
    return (
        <div className="formBackground">
        <form className='newTODOForm'>
            <h2>Agrega una nueva tarea</h2>
            <textarea className='formTextarea' name="" placeholder='Agrega un nuevo Todo aqui ...' id="" cols="30" rows="10"></textarea>
            <div className="buttonFormContainer">

            <button onClick={(e) => {
                setOpenModal(false);
            }} className='cancelButton'>Cerrar</button>
            <button className='confirmButton'>Añadir TODO</button>
            </div>
        </form>
        </div>
    )
}

export default TodoForm