import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, setTasks }) => {
    
    if(tasks.length === 0) {
        return (
            <div id="task-list" className="mb-5 text-center">
                No tasks found. Please add a task.
            </div>
        )     
    }
    
    return (
        <div id="task-list" className="mb-5">

        {
            tasks.map(task => (
                <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
            ))
        }

        </div>
    )
}

export default TaskList