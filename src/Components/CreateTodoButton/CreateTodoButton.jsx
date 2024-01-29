import React from 'react'
import './CreateTodoButton.css'

import {  FaPlus, FaXmark} from "react-icons/fa6";
// import { RxCross2 } from "react-icons/rx";

import { TodoContext } from '../../TodoContext/TodoContext'


function CreateTodoButton() {
  const { openModal, setOpenModal } = React.useContext(TodoContext);

  return (
    <div>
      <button className= {openModal? "css-button css-button-arrow css-button-arrow--red" : "css-button css-button-arrow css-button-arrow--green"} onClick={(e) => {
        setOpenModal(!openModal);
      }}> {openModal? <FaXmark/> : <FaPlus/>}
       </button>

    </div>
  )
}

export default CreateTodoButton;