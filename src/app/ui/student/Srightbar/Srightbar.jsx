'use client';
import React, { useState, useEffect } from 'react';
import styles from './Srightbar.module.css'; // Assuming you have a CSS module file for styling

const Srightbar = () => {
    // State to manage tasks
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Function to handle adding a new task
    const addTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    // Function to handle marking a task as done
    const markTaskAsDone = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to local storage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className={styles.container}>
            <div className={styles.todo}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
                <div className={styles.task}>
                    {tasks.map((task, index) => (
                        <div key={index} className={styles.list}>
                            <div>
                                <h3>{task}</h3>
                            </div>
                            <div>
                                <button onClick={() => markTaskAsDone(index)}>Done</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Srightbar;
