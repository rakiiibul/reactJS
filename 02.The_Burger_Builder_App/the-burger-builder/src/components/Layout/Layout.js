import React from 'react';
import Ux from '../../hoc/ux';
import classes from './Layout.css';

const layout=(props)=>(
    <Ux>

    <div>Toolbar,SideDrawer,Backdrop</div>
    <main className={classes.Content}>
         {props.children}
        </main>
    </Ux>
);

export default layout;