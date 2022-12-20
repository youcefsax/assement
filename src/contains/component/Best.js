import React from "react";
import './best.css'

const Best=({title,price,description,image,id})=>{
return(
    
     <div className="data">
     <div className="d"><img src={image}></img></div>
         
     <h5>{title}</h5>
     <p>{description}</p>
     <span>{price}</span>
         
 </div>
)
}
export default Best