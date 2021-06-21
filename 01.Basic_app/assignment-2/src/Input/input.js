import React from 'react';
const Input=(props)=>{
    return(
        <div>
        <input type="text"
         onChange={props.changed} 
         value={props.value}/>
        <p>Text Length : {props.Name}</p>
        </div>
    );
}
export default Input;