import React, { useState } from 'react'
import uuid from 'react-uuid'

const Form = ({ tasks, setTasks }) => {

    const [taskValue, setTaskValue] = useState('')
    const [disableSubmit, setDisableSubmit] = useState(true)

    //Går ej att klicka på submit då fältet är tomt
    const taskHandler = (e) => {
        e.target.value.length >= 0 ? setDisableSubmit(false) : setDisableSubmit(true)        
        setTaskValue(e.target.value)
    }
    //vid submit sparas informationen ner i en array
    const submitHandler = (e) => {
        e.preventDefault()
        setTasks([ ...tasks, { taskValue: taskValue, done: false, id: uuid() }])
        setTaskValue('')
        setDisableSubmit(true)
    }

    return (
        <form>
            <div className="mb-4">
                <textarea onChange={taskHandler} value={taskValue} className="form-control" rows="3" placeholder="Your task"></textarea>
            </div>
            <div className="mb-3">
                <button onClick={submitHandler} disabled={disableSubmit} type="submit" className="btn btn-secondary w-100 p-2">Add Task</button>
            </div>
        </form>
    )
}

export default Form