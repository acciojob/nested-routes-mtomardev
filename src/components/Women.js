import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Home from "./Navbar";

const Women = () =>{
    return(
        <div>
            <h1>Women Items:</h1>
            <ul>
                <li>
                    <NavLink to="Grooming">Grooming</NavLink>
                </li>
                <li>
                    <NavLink to="Shirt">Shirt</NavLink>
                </li>
                <li>
                    <NavLink to="Trouser">Trouser</NavLink>
                </li>
                <li>
                    <NavLink to="Jewellery">Jewellery</NavLink>
                </li>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Women