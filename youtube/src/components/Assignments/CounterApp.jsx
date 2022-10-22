import React,{useState} from 'react'


function CounterApp() {

    const [count, setCount] = useState(0)
    const increment = () => {
        if (count <5) {
            setCount(count+1)
        }
    }
    const decrement = () => {
        if (count > -5) {
            setCount(count-1)
        }
    }
    const reset = () => {
        setCount(0)
    }


  return (
    <div className='flex justify-center items-center flex-col max-w-6xl m-auto bg-gray-700 min-h-screen text-white'>
          <h1 className='text-white font-semibold text-5xl py-4'>Counter App</h1>
          <h1 className='text-white font-semibold text-5xl py-4'>{count}</h1>
          <div>
            <button onClick={increment} className='px-8 py-2 mx-2 text-black font-semibold text-2xl rounded-full bg-gray-300'>+</button>
            <button onClick={decrement} className='px-8 py-2 mx-2 text-black font-semibold text-2xl rounded-full bg-gray-300'>-</button>
            <button onClick={reset} className='px-8 py-2 mx-2 text-black font-semibold text-2xl rounded-full bg-gray-300'>reset</button>
          </div>
    </div>
  )
}

export default CounterApp
