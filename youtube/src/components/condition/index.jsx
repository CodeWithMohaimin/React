import React, { Component } from 'react'
import Home from './Home';
import Login from './Login';



export default class index extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: false,
        }
      }
    render() {
       
        let element = (this.state.isLoggedIn) ? <Home /> : <Login />

        return (
            <div>
                {element}
            </div>
        )
  }
}



//-----> Conditional Rendering with Ternary Operator

// export default class index extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            isLoggedIn: false,
//         }
//       }
//     render() {
       
//         let element = (this.state.isLoggedIn) ? <Home /> : <Login />

//         return (
//             <div>
//                 {element}
//             </div>
//         )
//   }
//-----> Conditional Rendering with Ternary Operator

// export default class index extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            isLoggedIn: false,
//         }
//       }
//     render() {
//         return (
//             <div>
//                 (this.state.isLoggedIn) ? <Home /> : <Login />
//             </div>
//         )
//   }


//-----> Conditional Rendering with && Operator 

// export default class index extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            isLoggedIn: false,
//         }
//       }
//     render() {
//         return (
//             <div>
//                 (this.state.isLoggedIn) && <Home />
//             </div>
//         )
//   }






//-----> Conditional Rendering with if else statements

// export default class index extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            isLoggedIn: true,
//         }
//       }
      
//   render() {
//       if (this.state.isLoggedIn) {
//         return <Home />
//       } else {
//           return <Login />
//     }
//   }
// }



//------> Conditional Rendering with element variable

// export default class index extends Component {
//     constructor(props) {
//         super(props)
      
//         this.state = {
//            isLoggedIn: false,
//         }
//       }
      
//     render() {
//         const { isLoggedIn } = this.state;
//         let element;

//         if (isLoggedIn) {
//             element= <Home />
//         } else {
//             element = <Login />
//         }


        
//         return (
//             <div>
//                 {element}
//             </div>
//         )
//   }
// }
