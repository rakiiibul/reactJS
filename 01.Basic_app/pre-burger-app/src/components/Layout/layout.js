import React from 'react';
import Aux from '../../hoc/Bux';
import classes from './layout.css';
const layout=(props)=>(
    <Aux>
    <div>Toolbar,SideDrawer,BackDrawer</div>
    <main className={classes.Content}>
          {props.children}
    </main>
    </Aux>
);
export default layout;