import React from 'react';
import classes from './DrawToggle.css'; 

const drawerToggle=(props)=>(
<div onClick={props.show} className={classes.DrawerToggle}><div></div>
<div></div>
<div></div></div>

);
export default drawerToggle;