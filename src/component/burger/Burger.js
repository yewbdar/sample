import React from 'react'
import BurgerIngerident from './burgerIngeridient/BurgerIngerident'
import './burger.css'

const Burger = (props) =>{
    return (
        <div className='burger'>
            <BurgerIngerident type='bread-top' />
            <BurgerIngerident type='cheese' />
            <BurgerIngerident type='salad' />
            <BurgerIngerident type='meat' />
            <BurgerIngerident type='bread-bottem' />
        </div>
    )
}
export default Burger