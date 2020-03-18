import React, { createContext, useState } from "react";
import { v1 as uuidv1 } from 'uuid';

export const TaskListContext = createContext();

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Task Number One' },
        { id: 2, description: 'Task Number Two' },
        { id: 3, description: 'Task Number Three' }
    ])

    const addTask = (description) => {
        setTasks([...tasks, { description, id: uuidv1() }])
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const clearList = () => {
        setTasks([])
    }

    return (
        <TaskListContext.Provider 
            value={{ 
                tasks,
                addTask,
                removeTask,
                clearList
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    );
}

export default TaskListContextProvider