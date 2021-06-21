import React from 'react';


const Validation=(props)=>{
    let ValidationMessage='Text too Short!';
    if(props.Length>10)
    {ValidationMessage='Text too Long!'}
    else if((props.Length>5)&&(props.Length<10))
    {ValidationMessage='Text is Fine!'}
    
    return(
        <div>
            <p>{ValidationMessage}</p>
        </div>
)
} 
export default Validation;