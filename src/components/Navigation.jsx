import React, { Component } from 'react';
import logo from "./image/logo.png";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
    state = {  } 
    render() { 
        return (
            <header>
            <img src={logo} alt="" className='logo' />
            <nav>
                <ul className='nav_links'>
                    <li><NavLink to="/">خانه</NavLink></li>
                    <li><NavLink to="/cards">محصولات</NavLink></li>
                    <li><NavLink to="/">برترین ها</NavLink></li>
                </ul>
            </nav>
            <NavLink to="/cards" className="cta"><button>محصولات</button></NavLink>
        </header>
        );
    }
}
 
export default Navigation;