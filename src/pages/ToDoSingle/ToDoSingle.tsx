import React from 'react'
import { RouteComponentProps } from "react-router";
import { useParams } from 'react-router'
import { IToDo } from '../../App'

import './todosingle.style.css'
interface IPros extends RouteComponentProps {
    list: IToDo[],
    setList: (list: IToDo[]) => void
}
const ToDoSingle: React.FC<IPros> = ({ list, setList, ...props }) => {
    const { id } = useParams<{ id: string }>()
    const toDoItem = list[+id]
    if (!toDoItem) {
        return (
            <div>
                item not found
            </div>
        )
    } else {
        return (
            <div className='to-do-single'>
                <div className='header'>
                    <h1>{toDoItem.title}</h1>
                    <p>{toDoItem.description}</p>
                </div>
                <div className='items'>
                    {toDoItem.items.map((item) => (
                        <div className='item-container'>
                            <label className="form-check-label">
                                <input type="checkbox" className="form-check-input"
                                    name="" id=""
                                    value="checkedValue"
                                    checked={item.isDone} />
                                {item.title}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}
export default ToDoSingle