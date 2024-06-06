import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas } from '@fortawesome/free-solid-svg-icons'
import "./index.css"

library.add(fas)

const Todolist = () =>{
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');
    const [editText, setEditText] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) {
          setTasks(storedTasks);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);
    
      const handleAddTask = () => {
        if (newTask.trim()) {
          setTasks([...tasks, { text: newTask, completed: false }]);
          setNewTask('');
        }
      };
    
      const startEditing = (index, text) => {
        setEditIndex(index);
        setEditText(text);
      };
    
      const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((task, i) => i !== index);
        setTasks(updatedTasks);
      };
    
      const handleEditChange = (e) => {
        setEditText(e.target.value);
      };
    
      const saveEdit = (index) => {
        handleUpdateTask(index, editText);
        setEditIndex(null);
        setEditText('');
      };
    
      const handleUpdateTask = (index, newTask) => {
        const updatedTasks = tasks.map((task, i) =>
          i === index ? { ...task, text: newTask } : task
        );
        setTasks(updatedTasks);
      };
    
      const handleToggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) => {
          if (i === index) {
            return { ...task, completed: !task.completed };
          }
          return task;
        });
        setTasks(updatedTasks);
      };
    
      const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') return task.completed;
        if (filter === 'ative') return !task.completed;
        return true;
      });
    
      const element = <FontAwesomeIcon icon={['fak', 'my-icon']} />
    
    return(
        <div>
        <h1>To-Do List</h1>
      <div className="input-container">
        <input
          id="txtp"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button id="addbtn" onClick={handleAddTask}> + New task</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
          {editIndex === index ?(
            <input 
            type="text"
            value={editText}
            onChange={handleEditChange}
            onBlur={()=>saveEdit(index)}
            />
          ):(
            <span onClick={() => handleToggleTask(index)}>{task.text}</span>
          )}
            <div className="buttons">
              <button onClick={() => handleDeleteTask(index)}><FontAwesomeIcon icon="fas fa-trash-alt" /></button>
              {editIndex === index ? (
                <button onClick={() => saveEdit(index)}><FontAwesomeIcon icon="fas fa-save" /></button>
              ):(
                <button onClick={() => startEditing(index, task.text)}><FontAwesomeIcon icon="fas fa-pen" /></button>
              )}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist;