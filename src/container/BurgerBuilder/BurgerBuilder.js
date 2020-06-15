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
            meat : 2,
        },
        startBuild:false,
        totalPrice:4
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
                lessIngredient ={this.removeIngredientHandler}/>
            </React.Fragment>
        )
    }
}

export default BurgerBuilder