import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'Rakibul',age:24},
      {name:'Hasan',age:22},
      {name:'bul',age:24}
    ]
  }
  switchNameHandler=(newName)=>{
    console.log('Was clicked');
    this.setState({persons:[
      {name:newName ,age :24},
      {name:'Hasan',age:22},
      {name:'bul',age:24}
    ]
  
    });

  }
  nameChangeHandler=(event)=>{
    this.setState({persons:[
      {name:'Amena' ,age :24},
      {name:event.target.value,age:22},
      {name:'bul',age:24}
    ]
  
    });

  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      padding:'8px',
      border:'1px solid blue',
      cursor:'pointer',
      margin:'1px 5px 10px 1px'
    };
    return (
      <div className="App">
       <h1>This is my first Application</h1>
       <button 
       style={style}
       onClick={this.switchNameHandler.bind(this,'Azman')}
       >Switch Name</button>
       <Person name={this.state.persons[0].name} 
       age ={this.state.persons[0].age}/>
       <Person name={this.state.persons[1].name} 
       age ={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this,'Raikibul')}
        changed={this.nameChangeHandler}>
        My hobbies is collecting coins</Person>
       <Person name={this.state.persons[2].name} 
       age ={this.state.persons[2].age}/>
       
       
      </div>
    );
  }
}

export default App;
