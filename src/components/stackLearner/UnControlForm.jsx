import React, { Component } from 'react'

export default class UnControlForm extends Component {
    

    handleSubmit = (event) => {
        event.preventDefault();

        const formObj = {}

        formObj.name = event.target.name.value
        formObj.email = event.target.email.value
        formObj.password = event.target.password.value
        console.log(formObj)

        event.target.reset()
    }

  render() {
    return (
        <div>
            <form
                onSubmit={this.handleSubmit}
                className='unControlForm'>
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                />
                <br />
                <input
                    type="email"
                    name='email'
                    placeholder='email@example.com'
                />
                
                <br />
                    
                <input
                    type="password"
                    name='password'
                    placeholder='*******'
                />
                <br />

                <button>Submit</button>
                
            </form>


            
      </div>
    )
  }
}

//this is good practice   