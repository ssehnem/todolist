import React, { useState } from 'react'
import Create from './Create'

function Home() {
  const [todos] = useState([])

  return (
    <div className="home">
      <h2>To-do List</h2>
      <div className="create_form">
        <Create />
      </div>
      {
        todos.length === 0 
          ? <div><h2>Nenhuma tarefa registrada</h2></div>
          : todos.map((todo, index) => (
              <div key={index} className="todo_item">
                {todo}
              </div>
            ))
      }
    </div>
  )
}

export default Home
