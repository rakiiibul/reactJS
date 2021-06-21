import React, {Component} from 'react';
import Pux from '../../hoc/ux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
const INGREDIENTS_PRICES={
    salad :0.5,
    cheese:2.5,
    meat:1.5,
    bacon:0.5
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
        totalPrice:4,
        purchaseble:false,
        purchasing:false,
    }
    updatePurchaseState(ingredients){
     
        const sum =Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey];
        }) 
        .reduce((sum,el)=>{
            return sum + el;
        },0);
        this.setState({purchaseble: sum > 0});
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
        this.setState({totalPrice:newPrice,
            ingredients:updatedIngreients});
        this.updatePurchaseState(updatedIngreients);
    }
    removeIngredientHandler=(type)=>{
        
             const oldCount =this.state.ingredients[type];
             if(oldCount<=0){
                 return;
             }
            const updatedCount =oldCount-1;
             const updatedIngreients={
                ...this.state.ingredients
            };
            updatedIngreients[type]=updatedCount;
             const priceReduction =INGREDIENTS_PRICES[type];
            const oldPrice=this.state.totalPrice;
            const newPrice =oldPrice-priceReduction;
            this.setState({totalPrice:newPrice,
                ingredients:updatedIngreients});
            this.updatePurchaseState(updatedIngreients);

    
}
 purchaseHandler=()=>{
     this.setState({purchasing:true});

 }
 backDropHandler=()=>{
     this.setState({purchasing:false});
 }

 purchasingContinueHandler=()=>{
     alert('Want to proceed Checkout?')

 }
 purchasingCancalHandler=()=>{
    this.setState({purchasing:false});
     
}
    render(){

        const disabledInfo={
            ...this.state.ingredients
        };
        for (let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }

        return(
    
            <Pux>
            <Modal show={this.state.purchasing} modalclose={this.backDropHandler}>
            <OrderSummary ingredients={this.state.ingredients}
            checkout={this.purchasingContinueHandler}
            checkoutCancal={this.purchasingCancalHandler}
            price={this.state.totalPrice}
            ></OrderSummary></Modal>
            <Burger ingredients={this.state.ingredients}/>
            
            <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemove={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasebled={this.state.purchaseble}
            ordered={this.purchaseHandler}
            />
        
            </Pux>

        );
    }

}
export default BurgerBuilder;