import React from 'react'
import './Button.css'
export default function Button(props) {
    return (
    <button className={['Button',props.butType].join(' ')} 
    onClick={props.clicked}>{props.children}</button>
    )
}
