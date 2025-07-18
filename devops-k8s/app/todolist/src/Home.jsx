import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import './App.css';
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([]);

  const API_URL = 'http://localhost:3001';


  useEffect(() => {
  fetchTodos();
  axios.get(`${API_URL}/get`)
    .then(result => {
      console.log("Dados recebidos:", result.data);
      setTodos(result.data);
    })
    .catch(err => console.log(err));
}, []);

  const handleEdit = (id) => {
    axios.put(`${API_URL}/update/${id}`)
      .then(() => {
        location.reload();
      })
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/delete/${id}`)
      .then(() => {
        setTodos(todos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };

  const fetchTodos = () => {
  axios.get(`${API_URL}/get`)
    .then(result => setTodos(result.data))
    .catch(err => console.log(err));
};

  return (
    <div className="home">
      <h1>Lista de Tarefas</h1>
      <br />
      <Create API_URL={API_URL} onTaskAdded={fetchTodos} />
      {
        todos.length === 0 
        ? <div><h4>Nenhuma tarefa pendente</h4></div>
        : todos.map(todo => (
            <div className="task" key={todo._id}>
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {todo.done 
                  ? <BsFillCheckCircleFill className="icon" /> 
                  : <BsCircleFill className="icon" />
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span onClick={() => handleDelete(todo._id)}>
                  <BsFillTrashFill className="icon" />
                </span>
              </div>
            </div>
          ))
      }
    </div>
  );
}

export default Home;
