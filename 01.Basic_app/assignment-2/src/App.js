import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Input from './Input/input';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import Char from './CharComponent/Char';


class App extends Component {
  state={
    textlength: ''
}

  textlengthlistener=(event)=>{
    this.setState({
      textlength:event.target.value
    });
 
  }
   deletecharhandler=(index)=>{
     const text=this.state.textlength.split('');
     text.splice(index,1);
     const updatedtext=text.join('');
     this.setState({textlength:updatedtext});


   }

   render() {
     const charList=this.state.textlength.
     split('').map((ch,index)=>{
       return <Char character={ch} 
       key={index}
       clicked={()=>this.deletecharhandler(index)}
       />
     });
    return (
      <div className="App">
      <h1> My first App</h1>
   
      <input type="text"
        onChange={this.textlengthlistener}
        value={this.state.textlength}
        />
        
        <p>Text Length :  {this.state.textlength.length}</p>
        <Validation Length={this.state.textlength.length}/>
        {charList}
        </div>
    );
  }
}

export default App;
/* 
state={
   Person:[
     {Name:'Hasan' ,Age:21},
     {Name:'Rakibul' ,Age:23},
     {Name:'Amena' ,Age:24}
   ]
 }
NameChangeHandler=()=>{
  this.setState({
    Person:[
      {Name:'Aasan' ,Age:21},
      {Name:'Aakibul' ,Age:23},
      {Name:'NAmena' ,Age:24}
    ]
  })
<button onClick={this.NameChangeHandler}><p>Button</p></button>
      <Input Name={this.state.Person[0].Name} 
      Age ={this.state.Person[0].Age}/>
      <Input Name={this.state.Person[1].Name}
       Age ={this.state.Person[1].Age}/>
      <Input Name={this.state.Person[2].Name}
       Age ={this.state.Person[2].Age}/>*/


       //assaignment 1
/*
 state={
    Username:[
      {Name:'Rakibul'}
    ]
  }
  UserChangeHandler=(event)=>{
   this.setState({
     Username:
     [{Name:event.target.value}]
   });
  }


   <button onClick={this.UserChangeHandler}>Handler</button>
      <UserOutput Name='Hasan'/>
    
      <UserOutput Name={this.state.Username[0].Name}/>
      
      <UserInput click={this.UserChangeHandler}
      value={this.state.Username[0].Name}/>
      
    
      
      */