import React from 'react'
import './buildControl.css'
const BuildControl =(props)=>(
    <div className='BuildControl'>
        <div className='Label'>{props.lable}</div>
        <button className='Less' onClick={()=> props.less(props.lable)}>Less</button>
        <button className='More' onClick={()=> props.added(props.lable)}>More</button>
    </div>
)
export default BuildControl