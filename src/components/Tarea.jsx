import React from 'react'
import '../styles/Tarea.css'

function Tarea({id, text, complete, deleteTask, completedTask}) {
  return (
    <div className={ complete ? 'complete' : 'ctn-task' }>
      <div 
        className='task-txt'
        onClick={ ()=> completedTask(id) }
        >
          {text}
      </div>
      <button className='delete-btn' onClick={ ()=> deleteTask(id) } >x</button>
    </div> 
  )
}

export default Tarea