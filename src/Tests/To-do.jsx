import React, { useState } from 'react';

function To_do() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
  
    const addTask = () => {
      if (task.trim()) {
        setTasks([...tasks, { text: task, completed: false }]);
        setTask(""); // Clear input field
      }
    };
  
    const toggleTaskCompletion = (index) => {
      const updatedTasks = tasks.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      );
      setTasks(updatedTasks);
    };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((t, index) => (
            <li key={index} className={t.completed ? "completed" : ""}>
              <span onClick={() => toggleTaskCompletion(index)}>
                {t.text}
              </span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
}
export default To_do