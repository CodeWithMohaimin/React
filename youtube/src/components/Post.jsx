import React from 'react'


const Post = (props) => {
  return (
    <div className='flex flex-col justify-center w-full max-w-md mx-auto my-10 bg-teal-500 p-8 space-y-4 text-lg text-white'>
      <p>User ID : {props.userId}</p>
      <p>Post Number :{props.postId}</p>

      <h1 className='bg-teal-600 p-2 text-center'>Title</h1>
      <p className='text-center capitalize'>
        {props.title}
      </p>

      <h1 className='bg-teal-400 p-2 text-center'>Body</h1>
      <p className='text-center capitalize'>
        {props.body}
      </p>
    </div>
  )
}

export default Post
