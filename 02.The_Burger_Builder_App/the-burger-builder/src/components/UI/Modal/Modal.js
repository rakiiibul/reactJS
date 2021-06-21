import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import Bux from '../../../hoc/ux';
 const Modal =(props)=>(
     <Bux>
     <Backdrop show={props.show} closed={props.modalclose}/>
<div className={classes.Modal}
style={{
    transform: props.show? 'translateY(0)': 'translateY(-100vh)',
    opacity : props.show? '1' : '0'
}}>
{props.children}
</div>
</Bux>
 );
 export default Modal;

