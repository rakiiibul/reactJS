import React from 'react';
import Aux from '../../../hoc/ux';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>
{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igkey=>{
        return(
            <li key={igkey}>
            <span style={{textTransform:'capitalize'}}>
            {igkey}</span> :  {props.ingredients[igkey]}
            </li>
        );

    })
    return(
        <Aux>
            <div>
            <h3>Your Order</h3>
            <p>A delicious Burger with this ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
          <Button btnType="Danger" clicked={props.checkoutCancal}>Cancal</Button>
          <Button btnType="Success" clicked={props.checkout}>Continue</Button>
          <p>Total Price : {props.price} </p>
            </div>
        </Aux>
    );

}
export default orderSummary;
