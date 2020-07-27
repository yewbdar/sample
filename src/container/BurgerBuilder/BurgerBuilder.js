import React , {Component} from 'react'

import Burger from '../../component/burger/Burger'
import BuildControler from '../../component/burger/buildControler/BuildControlers'
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
        purchasable:false
    }
    updatePurchaseState(){
         const ingerident= {...this.state.ingerident}
         const sum = Object.keys(ingerident)
                        .map(igKey => {
                            return ingerident[igKey]
                        }).reduce((sum , el)=> sum + el,0)
        this.setState({purchasable:sum > 0})
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
    }
    removeIngredientHandler = (type)=>{
        const oldCount = this.state.ingerident[type];
       if (oldCount <= 0 ) { return }
        const updatedCount= oldCount - 1;
        const updatedIngredient = {...this.state.ingerident}
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGERIDENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice - priceAddition;
        this.setState({totalPrice : newPrice , ingerident:updatedIngredient})
    }
    render(){
        return(
            <React.Fragment>
                <Burger ingerident={this.state.ingerident} startBuild={this.state.startBuild}/>
                <BuildControler 
                addIngredient={this.addIngredientHandler} 
                ingeridnt={this.state.ingerident}
                lessIngredient ={this.removeIngredientHandler}
                totalPrice={this.state.totalPrice}
                purchasable={this.updatePurchaseState}/>
                
            </React.Fragment>
        )
    }
}

export default BurgerBuilder