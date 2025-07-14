import React, { useState } from 'react'
import axios from 'axios'

function Create() {
        const [task, setTask] = useState()
        const handleAdd = () => {
            axios.post('/api/add', {task: task})
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
        }
    return (
        <div className='create_form'>
            <input type="text" placeholder='Adicione uma nova tarefa' onChange={(e) => setTask(e.target.value) }/>
            <button type="button" onClick={handleAdd}>Adicionar</button>
        </div>
    )
}

export default Create 