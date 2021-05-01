import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';
import Radium ,{StyleRoot}from 'radium';

class App extends Component {
  state={
    persons:[
      {id:'12',name:'Rakibul',age:24},
      {id:'13',name:'Hasan',age:22},
      {id:'14',name:'bul',age:24}
    ]
  }
 deletePersonHandler=(personIndex)=>{
   //const persons=this.state.persons.slice();
   const persons=[...this.state.persons];
   persons.splice(personIndex,1);
   this.setState({persons:persons});


 }



  nameChangeHandler=(event,id)=>{
    const personIndex=this.state.persons.findIndex(
      p=>{
        return p.id===id;
      }
    );
    const person={...this.state.persons[personIndex]};
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex] =person;
    
    this.setState({persons:persons
  
    });


  }
  togglePersonHandler=()=>{
    const doesShow=this.state.showPersons;
    this.setState({showPersons:!doesShow});


  }
  render() {
    const style={
      backgroundColor:'#000',
      font:'inherit',
      color:'white',
      padding:'8px',
      border:'1px solid blue',
      cursor:'pointer',
      margin:'1px 5px 10px 1px',
      ':hover' :{
        backgroundColor:'lightgreen',
        color:'black',
      }
    };
    let persons=null;
    if(this.state.showPersons)
    {     persons=( 
      <div>
      {this.state.persons.map((person,index)=>{
        return <Person
        click={()=>this.deletePersonHandler(index)} 
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event)=>this.nameChangeHandler
          (event,persons.id)}/>
      })}
   
      </div>);
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'maroon',
        color:'white'
      }

    }
    
    const classes=[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <StyleRoot>
      <div className="App">
       <h1>This is my first Application</h1>
       <p className={classes.join(' ')}>Here is My  first react App</p>
       <button 
       style={style}
       onClick={this.togglePersonHandler}
       >Toggle Person</button>
       {persons}
       
      
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
