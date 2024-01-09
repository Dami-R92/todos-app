import React from 'react'
import './CreateTodoButton.css'

import { FaCirclePlus  } from "react-icons/fa6";



function CreateTodoButton() {

  return (
    <div>
      <button className="css-button css-button-arrow css-button-arrow--green" onClick={(e) => {
        console.log('apretaste un boton');
      }}> <FaCirclePlus /> </button>

    </div>
  )
}

export default CreateTodoButton