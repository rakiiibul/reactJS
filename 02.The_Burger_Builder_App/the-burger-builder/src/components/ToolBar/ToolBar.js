import React from 'react';
import classes from './ToolBar.css';
import Logo from './../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
const toolBar=(props)=>(
    <header className={classes.ToolBar}>
    <DrawerToggle show={props.showed}/>
   <Logo height="80%"/>
    <nav className={classes.DesktopOnly}>
        <NavigationItems />
    </nav>
    </header>
);
export default toolBar;
