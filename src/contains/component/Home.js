import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Dresses from "./Dresses";
import Arrival from "./Arrival";
import Discount from "./Discount";
import Best from "./Best";
import Testemonial from "./Testemonial";

const Home=({product , best})=>{

return(
    <div>
<Hero/>
<Dresses/>
<div className="arrival-container">
    <div className="title">
        <h2>New Arrival</h2>
        <h5>See All</h5>
    </div>
    <div className="product-container">
            <div className="product">
            {product.map((p,i)=>{
        return <Arrival 
        key={i} 
        id={product[i].id} 
        title={product[i].title} 
        price={product[i].price} 
        description={product[i].description}
        image={product[i].image}
        />

    })
    }
            </div>
    </div>
</div>


<Discount/>
<div className="best-container">
        <h2>Best Seller</h2>
        <div className="product">
        {best.map((p,i)=>{
        return <Best
        key={i} 
        id={best[i].id} 
        title={best[i].title} 
        price={best[i].price} 
        description={best[i].description}
        image={best[i].image}
        />

    })
    }
    </div>
    </div>
    <Testemonial/>
</div>
)
}
export default Home;