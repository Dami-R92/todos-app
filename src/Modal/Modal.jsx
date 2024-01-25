import React from 'react';
import {createPortal} from 'react-dom';
// import App from '../App/App';

//Styles
import './Modal.css';


const Modal = ({children}) => {
  return  createPortal(
    <div className='modal' >
        {children}
    </div>,
    document.getElementById('modal-root')
  );

}

export default Modal