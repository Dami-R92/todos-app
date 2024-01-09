import React from 'react'
import './TodosLoading.css'

import {  FaCircleNotch } from "react-icons/fa6";

const TodosLoading = () => {
    return (
        <div>
        <div className='loadingItem '>
            <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        <div className='loadingItem '>
                <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        <div className='loadingItem '>
                <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        <div className='loadingItem '>
                <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        <div className='loadingItem '>
                <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        <div className='loadingItem '>
                <FaCircleNotch className='loadingIcon' > </FaCircleNotch>
        </div>
        </div>
    )
}

export default TodosLoading