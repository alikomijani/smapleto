import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router";
import CardContainer from '../../components/CardContainer/CardContainer'
import ToDoCard from '../../components/ToDoCard/ToDoCard'
import { IToDo } from '../../App'
interface IPros extends RouteComponentProps {
    list: IToDo[],
    setList: (list: IToDo[]) => void
}
const ToDoArchive: React.FC<IPros> = ({ list, setList, ...props }) => {
    const handleRemove = (index: number) => {
        setList(list.filter((items, inx) => inx !== index))
    }
    return (
        <CardContainer>
            <button onClick={() => props.history.push('/add')}>
                create new
            </button>
            {
                list.map((item, index) => (
                    <ToDoCard
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        onClick={() => props.history.push('/' + index)}
                        handleRemove={() => handleRemove(index)}
                        handleUpdate={() => props.history.push('/update/' + index)}
                    />
                ))
            }
        </CardContainer>
    )
}
export default ToDoArchive