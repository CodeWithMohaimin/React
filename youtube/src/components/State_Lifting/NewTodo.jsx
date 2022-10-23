import React,{ useState } from 'react'

const NewTodo = (props) => {


  const [todoData, setTodoData] = useState('')
  const todoDataChange = (e) => {
    setTodoData(e.target.value);
  }

  const onAddItemFunc = (ev) => {
    ev.preventDefault()
    props.onTodo(todoData)
    
  }
  return (
      <form>
        <input 
          className='outline-none p-2' 
          placeholder='Add Something' 
          type="text"
          value={todoData}
          onChange ={todoDataChange}
        />

      <button
        className='px-8 py-2 m-1 text-gray-500 font-semibold rounded-r-full bg-gray-300 hover:bg-gray-400'
        onClick={onAddItemFunc}
        >Add</button>
      </form>
  )
}

export default NewTodo