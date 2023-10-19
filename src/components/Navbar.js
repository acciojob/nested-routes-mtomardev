import React from "react";
import { NavLink } from "react-router-dom";

const Home =() =>{
    return(
        <div>
            <nav>
            <ul>
                <li><NavLink to="/"> 
                    Home</NavLink></li>

                    <li><NavLink to="/women"> 
                    Women</NavLink></li>
            </ul>
            </nav>
            
        </div>
    )
}
export default Home;