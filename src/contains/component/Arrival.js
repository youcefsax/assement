import React from "react";
import './arrival.css';
import Carousel from 'react-carousel-responsive';

 

const Arrival=({title,price,description,image,id})=>{
    return(
        
            <div className="data">
                <div className="box"><img src={image}></img></div>
                    
                <h5>{title}</h5>
                <p>{description}</p>
                <span>{price}</span>
                    
            </div>
        
    )
}

export default Arrival