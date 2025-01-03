import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
export default function Navbar(){
    return(
        <>
        <ul>
            <il><NavLink to="/">Home</NavLink></il>
            <il><NavLink to="about">AboutUs</NavLink></il>
            <il><NavLink to="profile">Profile</NavLink></il>
            <il><NavLink to="contact">Contact</NavLink></il>

        </ul>
        </>
    )
}