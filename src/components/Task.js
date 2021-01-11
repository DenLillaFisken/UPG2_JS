import React from 'react'

const Task = ({ task, tasks, setTasks }) => {

    const checkIfDone = () => {
        setTasks(tasks.map(item => {
            if(item.id === task.id) {
                return {
                    ...item, done: !item.done
                }
            }
            
            return item
        }))
    }

    const deleteHandler = () => {
        setTasks(tasks.filter(item => item.id !== task.id))
    }
    
    return (
        <div className="border mb-2 p-3">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <div className="name">{task.taskValue}</div>
                </div>
                <div>
                    <i onClick={checkIfDone} className={ `fas fa-check-square pointer ${ task.done ? 'done' : 'not-done' }` }></i>
                    <i onClick={deleteHandler} className="fas fa-trash pointer"></i>
                </div>
            </div>
        </div>
    )
    
}



export default Task