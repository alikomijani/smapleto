import React from 'react'
import './todocard.style.css'
interface IProps {
    title?: string;
    description?: string;
    onClick?: () => void;
    handleRemove?: () => void;
    handleUpdate:() => void;

}
const ToDoCard: React.FC<IProps> =
    ({ title = 'title', description = 'description', onClick, handleRemove , handleUpdate }) => {
        return (
            <div className='card' onClick={onClick}>
                <div>
                    <div className='card-title'>{title}</div>
                    <div className='card-details'>{description}</div>
                </div>
                <div>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        handleUpdate && handleUpdate()
                    }}>
                        edit
                    </button>
                    {' '}
                    <button onClick={(e) => {
                        e.stopPropagation()
                        handleRemove && handleRemove()
                    }}>
                        remove
                    </button>
                </div>
            </div>
        )
    }


export default ToDoCard
