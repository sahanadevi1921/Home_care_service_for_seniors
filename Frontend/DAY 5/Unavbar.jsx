import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';

function Unavbar() {
    const [active, setActive] = useState("nav_menu");
    const navToggle = () => {
        active == "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");
    };
    return (
        <nav className="nav">
            <a href="#" clasName="nav_brand">Home Care Service</a>
            <ul className={active}>
              
                <Link to='/Homes' className="nav_link">
                    <li className="nav_item"> Homepage </li>
                </Link>
                <Link to='/viewServices' className="nav_link">
                    <li className="nav_item"> viewService </li>
                </Link>
                <Link to='/Login' className="nav_link">
                    <li className="nav_item"> Login </li>
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
    );
}

export default Unavbar;