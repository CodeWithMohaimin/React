import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <h1 className='m-2 text-left bg-gray-200 p-2 rounded'>{props.index + 1} . {props.todo}</h1>
    </div>
  )
}

export default Todo