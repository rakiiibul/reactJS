import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Logo from '../Logo/Logo';
import BackDrop from '../UI/Backdrop/Backdrop';
import Aux from '../../hoc/ux';


const sideDrawer=(props)=>{
    let attachedClasses=[classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses=[classes.SideDrawer,classes.Open];
    }
   
    return(
    <Aux>
    <BackDrop 
    show={props.open}
    closed={props.closed}/>
    <div className={attachedClasses.join(' ')}>
    <div className={classes.Logo}>
        <Logo/>
    </div>
    <nav>
    <NavigationItems/>
    </nav>
    </div>
    </Aux>);
};
export default sideDrawer;