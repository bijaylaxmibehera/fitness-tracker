import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    return (
        <>
        <div>
            <div><NavLink to="/">Fitness Tracker</NavLink></div>
        </div>
        <nav>
            <NavLink to="/">Dashboard</NavLink>
            <NavLink to="/exercise">Exercise</NavLink>
            <NavLink to="/food">Food</NavLink>
            <NavLink to="/goal">Goal</NavLink>
        </nav>
        </>
    )
}