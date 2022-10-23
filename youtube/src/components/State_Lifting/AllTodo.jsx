import React from 'react'
import Todo from './Todo'

const AllTodo = (props) => {
  return (
    <div className='p-2 bg-gray-300 rounded-md'>
      {props.todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} />
      ))}
    </div>
  )
}

export default AllTodo