import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Components from './Components/Components';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    output:[
      {name:'Raikibul', age:21},
      {name:'Abdullah' ,age:23}
    ]
}
nameChangeHandler=(event)=>{
  this.setState({output:[
    {name:'Azman', age:21},
    {name:event.target.value ,age:23}

  ]});


}
    
  render() {
    return (
      <div className="App">
       <h1>This is my first Application</h1>
       <Components></Components>
       <UserInput
       changed={this.nameChangeHandler}
       currentname={this.state.output[1].name}></UserInput>
       <UserOutput 
       name={this.state.output[1].name}
       age={this.state.output[1].age}></UserOutput>
       
      </div>
    );
    }
    }

export default App;
