import React from 'react'
import './TodoItem.css'

function TodoItem(props) {
  

  return (
    <div className='todoItem'>
    <div className="check">V</div>
    <p className='description'>{props.text}</p>
    <div className="delete">X</div>
  </div>
  )
}

export default TodoItem