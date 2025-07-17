import React, { useState } from 'react';
import axios from 'axios';

function Create({ API_URL }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) return;

    axios.post(`${API_URL}/add`, { task })
      .then(() => {
        setTask("");
        location.reload();
      })
      .catch(err => console.log("Erro ao adicionar:", err));
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
