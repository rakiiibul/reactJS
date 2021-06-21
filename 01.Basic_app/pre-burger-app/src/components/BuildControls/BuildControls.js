import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]


const buildControls=(props)=>(
    <div className={classes.BuildControls}>
    <p>Totall Price : {props.price}</p>
    {controls.map(ctrl=>(
        <BuildControl
        key={ctrl.label}
         label={ctrl.label}
         type={ctrl.type}
         added={()=>props.addIngredient(ctrl.type)}
         removed={()=>props.removeIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
        
         />
    ))}

    
    
    </div>


);
export default buildControls;
