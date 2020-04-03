import React from 'react'
import BurgerIngerident from './burgerIngeridient/BurgerIngerident'
import './burger.css'


const Burger = (props) => {
    let transformedBurger = Object.keys(props.ingerident)
    .map(igkey => {
        return [...Array(props.ingerident[igkey])]
        .map((_,i) => {
            return <BurgerIngerident key={igkey + i} type={igkey}/>
        })
    })
    .reduce((str , cur) => { return str.concat(cur)},[])
    
  if(transformedBurger.length === 0) transformedBurger = <p>please start adding ingerident </p>
    return (
        <div className='burger'>
            
            <BurgerIngerident type='bread-top' />
             {transformedBurger}
            <BurgerIngerident type='bread-bottem' />
           
        </div>
    )
}
export default Burger