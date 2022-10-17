import React from 'react'

const arr = [
    {
        fullName: 'John',
        age: 32,
        phone: [
            { home: '011464796'},
            { office: '165965696'},
        ]
   },
    {
        fullName: 'Mohaimin',
        age: 19,
        phone: [
            { home: '01742957522'},
            { office: '22222222'},
        ]
   }
]


function NestedMap() {
  return (
    <div>
        {arr.map((info, index) => (
            <article key={index}>
                <h1 className='text-2xl'>Name: {info.fullName}</h1>
                <h1>Age : {info.age}</h1>

                {info.phone.map((number, index) =>( 
                    <div key={index}>
                        <p>{number.home}</p>
                        <p>{number.office}</p>
                    </div>
                ))}
            </article>
      ))}
    </div>
  )
}

export default NestedMap
