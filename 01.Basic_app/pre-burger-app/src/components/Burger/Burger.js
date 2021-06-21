import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
const burger=(props)=>{

    let transformingredients=Object.keys(props.ingredients)
    .map(igkey=>{
        return[...Array(props.ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredient key={igkey +i} type={igkey}/>

        });
    }).reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformingredients.length===0)
    {
       transformingredients=<p>Please Add Ingredient!</p>
    }



    return(
        <div className={classes.Burger}>
                
            <BurgerIngredient type="bread-top"/>
            {transformingredients}
            <BurgerIngredient type="bread-bottom"/>
            
            
        </div>
    )
};
export default burger; 
