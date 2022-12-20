import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
const Navbar=()=>{
return(
    <div className="container">
        <div className="line-one">
            <div className="phone">
            <FontAwesomeIcon icon='phone' />
            <p>+971555776016</p>
            </div>
            <div className="logo">logo</div>
            <div className="social">
                <ul>
                    <li>fb</li>
                    <li>tw</li>
                    <li>ig</li>
                    <li>yt</li>
                </ul>
            </div>
        </div>
        <div className="line-two">
            <div className="pages">
                <ul>
                    <li>Home</li>
                    <li>about</li>
                    <li>FAQ</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="like">
                <ul>
                    <li><FontAwesomeIcon icon='user' /></li>
                    
                    <li><FontAwesomeIcon icon='heart' /></li>
                    
                    <li><FontAwesomeIcon icon='basket-shopping' /></li>
                </ul>
            
            </div>
        </div>
    </div>
)
}
export default Navbar;