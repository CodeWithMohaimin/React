import React from 'react'

const Todo = (props) => {
  return (
    <div className='flex justify-between'>
      <h1 className='m-2 text-left bg-gray-200 p-2 rounded'>{props.index + 1} . {props.todo}</h1>

      <button className='bg-red-300 my-2 px-2 '>Delete</button>
    </div>
  )
}

export default Todo