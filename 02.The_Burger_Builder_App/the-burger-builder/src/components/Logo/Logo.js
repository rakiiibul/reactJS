import React from 'react';
import classes from './Logo.css';
import Logo from './../../assests/images/burger-logo.png';
 const logo =(props)=>(
     <div className={classes.Logo} style={{height:props.height}}>
    
     <img src={Logo}/></div>

 );
 export default logo;