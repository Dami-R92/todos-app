import React from 'react'
import './CreateTodoButton.css'

function CreateTodoButton() {

  return (
    <div>
      <button className="css-button css-button-arrow css-button-arrow--green" onClick={(e) => {
        console.log('apretaste un boton');
      }}> Agregar Tarea</button>

    </div>
  )
}

export default CreateTodoButton