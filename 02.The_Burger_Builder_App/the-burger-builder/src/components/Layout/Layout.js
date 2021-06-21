import React, { Component } from 'react';
import Ux from '../../hoc/ux';
import classes from './Layout.css';
import ToolBar from '../ToolBar/ToolBar';
import SideDrawer from '../SideDrawer/SideDrawer';
import sideDrawer from '../SideDrawer/SideDrawer';

class Layout extends Component{
    state={
        showSideDrawer:true
    }
    SideDrawerShowHandler=()=>{
        this.setState({showSideDrawer:true})

    }
    SideDrawerClosedHandler=()=>{
        this.setState({showSideDrawer:false})

    }
    render(){
        return(
            <Ux>
            <div>
            <ToolBar showed={this.SideDrawerShowHandler}/>show</div>
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}
            />
            <main className={classes.Content}>
                 {this.props.children}
                </main>
            </Ux>)
    }
}

    


export default Layout;