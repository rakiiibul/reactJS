import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app=props=> {
 const [personState,setPersonsState]= useState({
      persons:[
        {name:'Rakibul',age:24},
        {name:'Hasan',age:22},
        {name:'Amena',age:14},
        {name:'Rakibul',age:22},
      ]
    });
  

  const switchNameHandler=(newName)=>{
    //console.log('Clicked!');
    //dont do this this.state.persons[0].name='Raiha';
    this.setState({persons:
    [    
      {name:newName,age:24},
      {name:'Hasan',age:22},
      {name:'Amena',age:14},
      {name:'Rakibul',age:22},
  
    ]});
  };

 
    return (
      <div className="App">
       <h1>Hi,I'm a react Developer</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
       <Person 
          name={personState.persons[0].name}
          age={personState.persons[0].age}></Person>
       <Person
          name={personState.persons[1].name}
          age={personState.persons[1].age}></Person>
       <Person 
          name={personState.persons[2].name} 
          age={personState.persons[2].age}></Person>
       <Person 
          name={personState.persons[3].name}
          age={personState.persons[3].age}
          click={this.switchNameHandler}> 
          I like Gardening</Person>
      
      

      </div>
    );
  
}


export default app;

