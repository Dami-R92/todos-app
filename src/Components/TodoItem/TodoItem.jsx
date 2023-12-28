import React from 'react'
import './TodoItem.css'

//Iconos
import { FaCheck, FaCirclePlus, FaXmark    } from "react-icons/fa6";

function TodoItem(props) {


  return (
    <div className={`todoItem${props.completed ? ' todoItem--completed' : ''}`}
    
    >
      <span className={`check${props.completed ? ' check--active' : ''}`} 
      onClick={props.onComplete}
      ><FaCheck /></span>
      <p className={`description${props.completed ? ' description--completed' : ''}`}>{props.text}</p>
      <span className="delete" 
      onClick={props.onDelete}
      ><FaXmark/></span>
    </div>
  )
}

export default TodoItem