import React from 'react'

import './cardcontainer.style.css'
interface IProps {
    children: React.ReactNode
}
const CardContainer: React.FC<IProps> =
    ({ children }) => {
        return (
            <div className='card-container'>
                {children}
            </div>
        )
    }


export default CardContainer
