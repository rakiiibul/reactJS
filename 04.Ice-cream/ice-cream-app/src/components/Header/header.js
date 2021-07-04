import React from 'react';
import Aux from '../../hoc/ux';

import classes from './Logo.css';
import logo from '../../assets/images/logo.svg';
const header=(props)=>(
    
    <header>
    <div class="container react" id="header">
      <div className={classes.Logo}>
        <img  src={logo} alt="Logo" />
      </div>
      <div class="textRight">
        <img src="images/react.svg"/>
        <p className={classes.T1}>aasd</p>
        <strong>React Rakibul</strong>
      </div>
    </div>
  </header>
  

);
export default header  ;