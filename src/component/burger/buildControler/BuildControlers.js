import React from 'react'
import './buildControler.css'
import BuildControl from '../buildControl/BuildControl'

const BuildControler = (props) => (
     <div className='buildControll'>
        {Object.keys(props.ingeridnt).map((ingrid,i)=>{
            return(
                <BuildControl key={i} lable={ingrid} 
                added={props.addIngredient}
                less ={props.lessIngredient}/>
            )
        })}
     </div>
)
export default BuildControler