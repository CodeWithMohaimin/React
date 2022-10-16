import React from 'react';
import Data from './Data.json';




const Post = () => {
  return (
    <div>
      {Data.map((item, index) =>
        <div key={index} className='flex flex-col justify-center w-full max-w-md mx-auto my-10 bg-teal-500 p-8 space-y-4 text-lg text-white'>
          <p>User ID : {item.userId}</p>
          <p>Post Number :{item.postId}</p>
  
          <h1 className='bg-teal-600 p-2 text-center'>Title</h1>
          <p className='text-center capitalize'>
          {item.title}
          </p>
  
          <h1 className='bg-teal-400 p-2 text-center'>Body</h1>
          <p className='text-center capitalize'>
          {item.body}
          </p>
        </div>
      )} 
    </div>
  )
}

export default Post
