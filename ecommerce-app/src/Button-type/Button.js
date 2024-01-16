import React from 'react'
import "./Button.css"
const Button = ({className,Name,onClick}) => {
  return (
   <button className = {`button-type ${className}`} onClick={onClick}>{Name}</button>
  )
}

export default Button
