import React from 'react';
const UserIntput=(props)=>{
    return (
        <div>
        <input type='text' 
        onChange={props.click}
        value={props.value}/>
 
        <p>{props.children}</p>
        </div>
        )
};
export default UserIntput;