import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const API = "http://localhost:8080/tasks";

  useEffect(() => {
    axios.get(API).then(res => setTasks(res.data));
  }, []);

  const addTask = () => {
    axios.post(API, { name: newTask }).then(() => {
      setTasks([...tasks, { name: newTask }]);
      setNewTask("");
    });
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New Task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t, i) => <li key={i}>{t.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

