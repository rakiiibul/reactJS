import React, {Component} from 'react';
import Pux from '../../hoc/ux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


const INGREDIENTS_PRICES={
    salad :0.5,
    chesse:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBuilder extends Component
{
    state={
        ingredients:{
            
            salad :0,
            bacon :0,
            cheese:0,
            meat  :0

        },
        totalPrice:4
    }
    addIngredientHandler=(type)=>{
        const oldCount =this.state.ingredients[type];
        const updatedCount =oldCount+1;
        const updatedIngreients={
            ...this.state.ingredients
        };
        updatedIngreients[type]=updatedCount;
        const priceAddition =INGREDIENTS_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice =oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngreients});
    }
    removeIngredientHandler=(type)=>{}
     
    render(){
        return(

            <Pux>
            <Burger ingredients={this.state.ingredients}/>
            
            <BuildControls
            ingredientsAdded={this.addIngredientHandler}/>

            </Pux>

        );
    }

}
export default BurgerBuilder;