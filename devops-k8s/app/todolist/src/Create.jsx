import React, { useState } from 'react';
import axios from 'axios';

function Create({ API_URL, onTaskAdded }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;

    axios.post(`${API_URL}/add`, { task })
      .then(() => {
        setTask(""); // limpa campo
        if (typeof onTaskAdded === "function") {
          onTaskAdded(); // atualiza lista no Home
        }
      })
      .catch(err => console.log("Erro ao adicionar tarefa:", err));
  };

  return (
    <div className='create_form'>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default Create;
