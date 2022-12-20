import React from "react";
import './footer.css'

const Footer=()=>{
return(
    <div className="footer">
        <div className="left">
            <div className="logo">logo</div>
            <p className="left-p">OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America</p>
            <span>Copyright Tanah Air Studio</span>
        </div>
        <div className="center">
            <ul>
                <li>facebook</li>
                
                <li>twitter</li>
                
                <li>youtube</li>
                
                <li>instgram</li>
            </ul>
        </div>
        
        <div className="right">
            <ul>
                <li>Contact</li>
                <li>8819 Ohio St. South Gate,
California 90280</li>

                <li>ourstudio@hello.com</li>

                <li>+271 386-647-3637</li>

            </ul>
        </div>
    </div>
)
}
export default Footer