import React, {Component, useState} from 'react'
import './App.css';
import Person from './Person/Person'

//ES6
class App extends Component{

  // constructor(){
  //   super()
  // }

  state = {
    persons: [
      {name: 'Devin', age : 23},
      {name: 'Allen', age: 23},
      {name: 'Dave', age : 32}
    ]
  }
    
  
  switchNameHandler = (newname)=>{
    this.setState({
      persons: [
        {name: newname, age : 23},
        {name: 'Allen', age: 23},
        {name: 'Dave', age : 29}
      ]
    })
  }
  nameChangeHandler = (event)=>{
    this.setState({
      persons: [
        {name: event.target.value, age : 23},
        {name: 'Allen', age: 23},
        {name: 'Dave', age : 29}
      ]
    })
  }

  render(){

    const style={
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello this is a header tag</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
          
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} change={this.nameChangeHandler}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> 
            some random list
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'DEVIN')}/>
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
