
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';
// import HomePages from "./HomePages";

function Navbar() {
    const [active, setActive] = useState("nav_menu");
    const navToggle = () => {
        active == "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");
    };
    return (
        <>
        {/* <HomePages/> */}
        <div className="navbarstick">
        <nav className="nav">
            <a href="#" className="nav_brand">Home Care Service</a>
            <ul className={active}>
                {/* <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
                <li className="nav_item"><a href="#" className="nav_link">Addservice</a></li>
                <li className="nav_item"><a href="#" className="nav_link">ViewService</a></li>
                <li className="nav_item"><a href="#" className="nav_link">AllBooking</a></li> */}
                <Link to='/Homes' className="nav_link">
                    <li className="nav_item"> Homepage </li>
                </Link>
                <Link to='/View' className="nav_link">
                    <li className="nav_item"> viewService </li>
                </Link>
                {/* <Link to='/BookService' className="nav_link">
                    <li className="nav_item"> BookService </li>
                </Link> */}
                <Link to='/MyBooking' className="nav_link">
                    <li className="nav_item"> MyBooking </li>
                </Link>
                <Link to='/Profile' className="nav_link">
                    <li className="nav_item"> Profile </li>
                </Link>
                <Link to='/Login' className="nav_link">
                    <li className="nav_item"> Logout </li>
                </Link>
                {/* <Link to='/Re' className="nav_link">
                    <li className="nav_item"> Login </li>
                </Link> */}

            </ul>
            <div onClick={navToggle} className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        </div>
        </>
    );
}

export default Navbar;

