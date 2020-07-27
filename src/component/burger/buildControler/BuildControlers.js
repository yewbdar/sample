import React from 'react'
import './buildControler.css'
import BuildControl from '../buildControl/BuildControl'

const BuildControler = (props) => (
     <div className ='buildControll'>
         <p>current price : <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {Object.keys(props.ingeridnt).map((ingrid,i)=>{
            return(
                <BuildControl key={i} lable={ingrid} 
                added={props.addIngredient}
                less ={props.lessIngredient}
                />
            )
        })}
        <button className='OrderButton' disabled={props.purchasable}>ORDER NOW</button>
     </div>
)
export default BuildControler