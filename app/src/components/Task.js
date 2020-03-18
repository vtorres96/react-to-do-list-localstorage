import React, { useContext } from "react";
import { TaskListContext } from '../contexts/TaskListContext';

const Task = ({ task }) => {
    const { removeTask } = useContext(TaskListContext);

    return (
        <li className="list-item">
            <span>{task.description}</span>
            <div>
                <button 
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button className="btn-delete task-btn">
                    <i className="fas fa-pen"></i>
                </button> 
            </div>
        </li>
    ) 
}

export default Task;
