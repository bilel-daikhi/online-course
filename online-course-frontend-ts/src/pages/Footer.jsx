import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-text.png"
export const Footer=()=>{
    return (<>
        <div className="container">
 
    <hr />
        <div className="text-center center-block">
        <p><i className="fa fa-copyright" aria-hidden="true"></i> Copyright 2024  <Link to="https://bilel-daikhi-portfolio.web.app/landing" target="_blank" > SBSA Solutions.</Link> </p>
        <img src={logo}   alt="logo"/>
            <br />
                <Link to="https://bilel-daikhi-portfolio.web.app/landing" target="_blank" className="mr-2"><i className="fa fa-external-link-square fa-3x social"></i></Link>
	            <Link to="https://www.linkedin.com/in/bilel-daikhi" target="_blank"><i className="fa fa-linkedin-square fa-3x social"></i></Link>
	           
</div>
</div>
       </>);
   
}