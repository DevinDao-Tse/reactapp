import React, {Component, useState} from 'react'
import './App.css';
import Person from './Person/Person'

//ES6
class App extends Component{

  switchNameHandler = ()=>{
        console.log('clicked')
      }

  render(){
    return (
      <div className="App">
        <h1>Hello this is a header tag</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name="Devin"/>
        <Person name="Allen"> 
            some random list
        </Person>
      </div>
    );
  }
}

//regular JS
// function App() {
//   const switchNameHandler = ()=>{
//     console.log('clicked')
//   }
  
//   return (
//     <div className="App">
//       <h1>Hello this is a header tag</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person name="Devin"/>
//       <Person name="Allen"> 
//           some random list
//       </Person>
//     </div>
//   );
// }

export default App;
