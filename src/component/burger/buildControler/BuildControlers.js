import React from 'react'
import './buildControler.css'
import BuildControl from '../buildControl/BuildControl'

const BuildControler = (props) => (
    
     <div className ='buildControll'>
         {console.log('in button',!props.purchasable)}
         <p>current price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {Object.keys(props.ingeridnt).map((ingrid,i)=>{
            return(
                <BuildControl key={i} lable={ingrid} 
                added={props.addIngredient}
                less ={props.lessIngredient}
                />
            )
        })}
        <button className='OrderButton' disabled={!props.purchasable} onClick={()=>props.orderHandler()}>ORDER NOW</button>
     </div>
)
export default BuildControler