import React, {useState} from 'react'
import AllTodo from './AllTodo'
import NewTodo from './NewTodo'


const dummyTodos = ["todo-one", "todo-two", "todo-three"]

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos)

  const handleTodoDataMethod = (newTodo) => {
    setTodos([...todos, newTodo])
  }


  return (
    <div className='text-center w-full min-h-screen bg-gray-700'>
      <div className='pt-12'>
        <NewTodo onTodo={handleTodoDataMethod} />
      </div>

      <div className=' flex justify-center items-center mt-20'>
        <AllTodo todos={todos} />
      </div>
    </div>
  )
}

export default Home
