import React,{useState} from 'react'


const CountHandeling = () => {

    const [count, setCount] = useState(0)
    const handleCount = ()=> {
        setCount(count+1)
    }
  return (
      <div>
          <h1>Count : {count}</h1>
          <button className='border-none px-8 py-2 m-4 border-black text-black font-semibold text-1xl rounded-full bg-gray-300' onClick={handleCount}>Increment Count</button>
      </div>
      
  )
}

export default CountHandeling