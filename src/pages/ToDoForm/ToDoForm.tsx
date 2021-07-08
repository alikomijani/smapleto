import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from "react-router";
import './todoform.style.css'
import { IToDo } from '../../App'
import { useParams } from 'react-router'
interface IProps extends RouteComponentProps {
    list: IToDo[],
    setList: (list: IToDo[]) => void
}
function ToDoForm({ list, setList, ...props }: IProps) {
    const { id } = useParams<{ id: string }>()
    const [newToDo, setNewToDo] = useState<IToDo>({
        id: 0,
        title: '',
        description: '',
        items: [
            {
                id: 0,
                title: '',
                isDone: false
            }
        ]
    })
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewToDo({ ...newToDo, [event.target.name]: event.target.value })
    }
    const handleAddNewTask = () => {
        setNewToDo({
            ...newToDo, items: [...newToDo.items,
            {
                id: new Date().getTime(),
                title: '',
                isDone: false
            }]
        })
    }
    const handleRemoveTask = (index: number) => {
        setNewToDo({ ...newToDo, items: newToDo.items.filter((item, inx) => inx !== index) })
    }
    const updateTask = (index: number, value: string) => {
        setNewToDo({
            ...newToDo, items:
                newToDo.items.map((item, inx) => inx === index ? { ...item, title: value } : item)
        })
    }
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (id !== undefined) {
            setList(list.map((item, index) => index === +id ? newToDo : item))
        } else {
            setList([newToDo, ...list])
        }

        props.history.push('/')
    }
    useEffect(() => {
        if (id !== undefined) {
            setNewToDo(list[+id])
        }
    }, [id, list])
    return (
        <div className='to-do-form'>
            <h2>create new task</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor="title">title</label>
                    <input onChange={handleChange} value={newToDo.title} id='title' name='title' type="text" />
                </div>
                <div className='form-group'>
                    <label htmlFor="description">description</label>
                    <input onChange={handleChange} value={newToDo.description} id='description' name='description' type="text" />
                </div>
                <div className='items-container'>
                    {newToDo.items.map((item, index) => (
                        <div key={item.id} className='form-group'>
                            <button type='button' onClick={() => handleRemoveTask(index)}>*</button>
                            <label htmlFor={'itemTitle' + item.id}>title</label>
                            <input
                                onChange={(e) => updateTask(index, e.target.value)}
                                value={item.title}
                                id={'itemTitle' + item.id}
                                name={'itemTitle' + item.id}
                                type="text"
                            />
                        </div>
                    ))}
                    <div style={{
                        marginTop: 15
                    }}>
                        <button type='button' onClick={() => handleAddNewTask()}>
                            add new task
                        </button>
                    </div>
                </div>
                <button>save</button>
            </form>
        </div>
    )
}

export default ToDoForm
