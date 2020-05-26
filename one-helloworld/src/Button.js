import React from "react"

// const Button = () =>{
//     return()
// } or 

const Button = ({title = "achyuth"}) => (
    <div> 
    <button className ="button">{title}</button>
    </div>

)

export default Button;