import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar=()=>{
    const getStyle=({isActive})=>({
        color:isActive?"red":"",
        fontWeight:isActive?"600":""
    })
    return (
        <>
        <div>
            <div><NavLink to="/">Fitness Tracker</NavLink></div>
        </div>
        <nav>
            <NavLink to="/" style={getStyle}>Dashboard</NavLink>||
            <NavLink to="/exercise" style={getStyle}>Exercise</NavLink>||
            <NavLink to="/food" style={getStyle}>Food</NavLink>||
            <NavLink to="/goal" style={getStyle}>Goal</NavLink> ||
            <NavLink to="https://github.com/bijaylaxmibehera/fitness-tracker" style={getStyle} target="_blank">Git repo</NavLink> ||
            <NavLink to="https://replit.com/@Bijaylaxmi2117/fitness-tracker?v=1" style={getStyle} target="_blank">API</NavLink> 

        </nav>
        </>
    )
}