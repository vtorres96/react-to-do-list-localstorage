import React, { useContext, useState } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
    const { addTask, clearList } = useContext(TaskListContext);

    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(description);
        setDescription('');
    }

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleClearList = (e) => {
        e.preventDefault()
        clearList()
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input 
                onChange={handleChange}
                value={description}
                type="text" 
                className="task-input"
                placeholder="Add task..."
                required
            />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    Add Task
                </button>
                <button onClick={handleClearList} className="btn clear-btn">
                    Clear
                </button>
            </div>
        </form>
    )
}

export default TaskForm
