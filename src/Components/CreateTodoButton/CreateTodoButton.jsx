import React from 'react'
import './CreateTodoButton.css'

import { FaCirclePlus, FaPlus} from "react-icons/fa6";

import { TodoContext } from '../../TodoContext/TodoContext'


function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  return (
    <div>
      <button className="css-button css-button-arrow css-button-arrow--green" onClick={(e) => {
        setOpenModal(true);
        console.log('apretaste un boton');
      }}> <FaPlus/> </button>

    </div>
  )
}

export default CreateTodoButton