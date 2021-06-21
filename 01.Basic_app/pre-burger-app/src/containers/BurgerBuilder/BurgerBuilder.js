import React,{Component} from 'react';
import Aux from '../../hoc/Bux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/BuildControls/BuildControls';

const INGREDIENTS_PRICE={
    meat:12,
    salad:15,
    cheese:17,
    bacon:5,

}

class BurgerBuilder extends Component{

    
    state={
        ingredients:{
            meat:0,
            salad:0,
            cheese:0,
            bacon:0,
   
        },
        totalPrice:4
    }
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingredients[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredients
    
    };
    updatedIngredient[type]=updatedCount;
    const  oldprice= this.state.totalPrice;
    const newprice=oldprice+INGREDIENTS_PRICE[type];
    this.setState(
        {
            totalPrice:newprice,
            ingredients:updatedIngredient,

        }
    )

}
removeIngredientHandler=(type)=>{
    const oldCount=this.state.ingredients[type];
    if(oldCount===0)
        return;
    const updatedCount=oldCount-1;
    const updatedIngredient={
        ...this.state.ingredients

};
updatedIngredient[type]=updatedCount;
const  oldprice= this.state.totalPrice;
const newprice=oldprice-INGREDIENTS_PRICE[type];
this.setState(
    {
        totalPrice:newprice,
        ingredients:updatedIngredient,

    }
)

}
    render(){

        const disableInfo={
            ...this.state.ingredients
        }
        for(let key in disableInfo)
        {
            disableInfo[key]=disableInfo[key]<=0
        }

        return(
            <Aux>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
            addIngredient={this.addIngredientHandler}
            removeIngredient={this.removeIngredientHandler}
            disabled={disableInfo}
            price={this.state.totalPrice}
            />
            
            
            </Aux>

        );
    }
}
export default BurgerBuilder;