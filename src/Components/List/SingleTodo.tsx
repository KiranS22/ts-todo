import React from 'react'
import { Listprops } from '../../interfaces/interfaces'




const SingleTodo = ({todo, deleteTodo}: Listprops) => {

  return (
    <div>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    <button type="button" onClick={() => deleteTodo(todo.id)}>
      Delete
    </button>
    <button type="button">Edit</button>
  </div>
  )
}

export default SingleTodo
