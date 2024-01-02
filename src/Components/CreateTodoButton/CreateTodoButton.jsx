import React from 'react'
import './CreateTodoButton.css'

import { FaCheck, FaCirclePlus, FaXmark    } from "react-icons/fa6";

function CreateTodoButton() {

  return (
    <div>
      <button className="css-button css-button-arrow css-button-arrow--green" onClick={(e) => {
        console.log('apretaste un boton');
      }}> Agregar Tarea <FaCirclePlus/> </button>
      <FaCirclePlus/>

    </div>
  )
}

export default CreateTodoButton