import React from 'react'
import Button from '../../UI/Button/Button'
const OrderSummery = (props)=>{
    const ingrident = Object.keys(props.ingerident).map(
         igkey => {
         return <li key={igkey}><span style={{textTransform:'capitalize'}}>{igkey}</span>: {props.ingerident[igkey]}</li>
         }
     )
     return(
         <React.Fragment>
             <h3>your order</h3>
             <p>A delicious burger with the following ingredients:</p>
             <ul>{ingrident}</ul>
             <p>Total price :<strong>${props.totalPrice.toFixed(2)}</strong> </p>
             <p>Continue to checkout ?</p>
             <Button clicked={()=>props.closeModal()} butType='Danger'>CANCEL</Button>
             <Button clicked={()=>props.purchaseContinueHandler()} butType='Success'>CONTINUE</Button>
         </React.Fragment>
     )
}
export default OrderSummery