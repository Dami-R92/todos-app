import React, { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../../TodoContext/TodoContext'


function TodoCounter() {

  const { totalTodos, completedTodos } = useContext(TodoContext)
  
  return (
    <h1>
    Has completado {completedTodos} de {totalTodos} TODOs
  </h1>
  )
}

export default TodoCounter;