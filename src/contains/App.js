import React, { useState, useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
  import { fab } from '@fortawesome/free-brands-svg-icons'
  import {  faHeart, faPhone, faUser, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import "./app.css";
import Footer from "./component/Footer";

library.add(fab, faHeart, faPhone, faUser, faBasketShopping)

const App=()=>  {
const [product, setProduct]=useState([]);
const [best, setBest]=useState([]);

useEffect(()=>{
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json));
            fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>setBest(json));
})


console.log(product)
    return (
<div>
        <Navbar/>
        <Home product={product} best={best}/>
        <Footer/>
        </div>
        )
}



export default App;