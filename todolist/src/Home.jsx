import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

function Home() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="home">
      <h1>To-do List</h1>
      <Create />
      {
        todos.length === 0 
          ? 
          <div><h2>Nenhuma tarefa registrada</h2></div>
          : 
          todos.map(todo => (
              <div>
                {todo.task}
              </div>
            ))
      }
    </div>
  )
}

export default Home
