import React from 'react'
import './TodoItem.css'

//Iconos
import { FaCheck, FaCirclePlus, FaXmark } from "react-icons/fa6";
import { FcLowPriority, FcHighPriority, FcMediumPriority } from "react-icons/fc";

function TodoItem(props) {

  const PriorityColorSelector = (priority) => {
    if (priority === 'Alta') {
      return <FcHighPriority />
    }
    else if (priority === 'Media') {
      return <FcMediumPriority />
    }
    else if (priority === 'Baja') {
      return <FcLowPriority />
    }
  }



  return (
    <div className={`todoItem${props.completed ? ' todoItem--completed' : ''}`}

    >
      <span className={`check${props.completed ? ' check--active' : ''}`}
        onClick={props.onComplete}
      ><FaCheck /></span>
      <span className='priority'>
        <p style={{ 'font-size': '10px', 'margin': '0px 10px ' }} >
          Prioridad:
        </p>
        {PriorityColorSelector(props.priority)}
      </span>
      <p className={`description${props.completed ? ' description--completed' : ''}`}>{props.text}</p>
      <span className="delete"
        onClick={props.onDelete}
      ><FaXmark /></span>
    </div>
  )
}

export default TodoItem