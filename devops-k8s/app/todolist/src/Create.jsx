import React, { useState } from 'react';
import axios from 'axios';

function Create({ API_URL, onTaskAdded }) {
  const [task, setTask] = useState("");

  const handleAdd = async () => {
    if (!task.trim()) return;

    try {
      const response = await axios.post(`${API_URL}/add`, { task }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("Resposta do backend:", response.data);
      setTask("");
      if (typeof onTaskAdded === "function") {
        onTaskAdded();
      }
    } catch (err) {
      console.error("Erro ao adicionar tarefa:", err);
    }
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
