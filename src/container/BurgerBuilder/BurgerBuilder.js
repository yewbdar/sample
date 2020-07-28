import React , {Component} from 'react'

import Burger from '../../component/burger/Burger'
import BuildControler from '../../component/burger/buildControler/BuildControlers'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummery from '../../component/burger/OrderSummery/OrderSummery'
const INGERIDENT_PRICES = {
    salad:0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon :0.7
}
class BurgerBuilder extends Component {
    state = {
        ingerident : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0,
        },
        startBuild:false,
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }
    updatePurchaseState =(ingerident)=> {
         const sum = Object.keys(ingerident)
                        .map(igKey => {
                            return ingerident[igKey]
                        }).reduce((sum , el)=> sum + el,0)
        this.setState({purchasable:sum > 0})
        console.log(sum > 0 , sum)
    }
    addIngredientHandler = (type) => {
     const oldCount = this.state.ingerident[type];
     const updatedCount= oldCount + 1;
     const updatedIngredient = {...this.state.ingerident}
     updatedIngredient[type] = updatedCount;
     const priceAddition = INGERIDENT_PRICES[type];
     const oldPrice=this.state.totalPrice;
     const newPrice=oldPrice + priceAddition;
     this.setState({totalPrice : newPrice , ingerident:updatedIngredient})
     this.updatePurchaseState(updatedIngredient);
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingerident[type];
       if (oldCount <= 0 ) { return }
        const updatedCount= oldCount - 1;
        const updatedIngredient = {...this.state.ingerident}
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGERIDENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;
        this.setState({totalPrice : newPrice , ingerident:updatedIngredient})
        this.updatePurchaseState(updatedIngredient);
    }
    handlePurchasing=()=>{
        this.setState({purchasing:true})
    }
    handletCloseModal =()=>{
        this.setState({purchasing:false})
    }
    purchaseContinueHandler =()=>{
        alert('you continue!')
    }
    render(){
        return(
            <React.Fragment>
                 <Modal show={this.state.purchasing} closeModal={this.handletCloseModal}>
                    <OrderSummery ingerident={this.state.ingerident} 
                    closeModal={this.handletCloseModal}
                    purchaseContinueHandler={this.purchaseContinueHandler}/>
                </Modal>
                <Burger ingerident={this.state.ingerident} startBuild={this.state.startBuild}/>
                <BuildControler 
                addIngredient={this.addIngredientHandler} 
                ingeridnt={this.state.ingerident}
                lessIngredient ={this.removeIngredientHandler}
                totalPrice={this.state.totalPrice}
                purchasable={this.state.purchasable}
                orderHandler={this.handlePurchasing}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder