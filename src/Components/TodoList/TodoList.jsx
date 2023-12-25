import React from 'react'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({children}) {
  return (
    
    <ul>
    {children}
    </ul>
  )
}

export default TodoList