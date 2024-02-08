import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/css/NavBar.css';


function Anavbar() {
    const [active, setActive] = useState("nav_menu");
    const navToggle = () => {
        active == "nav_menu" ? setActive("nav_menu nav_active") : setActive("nav_menu");
    };
    return (
        <><nav className="nav">
            <a href="#" clasName="nav_brand">Home Care Service</a>
            <ul className={active}>
                {/* <li className="nav_item"><a href="#" className="nav_link">Home</a></li>
    <li className="nav_item"><a href="#" className="nav_link">Addservice</a></li>
    <li className="nav_item"><a href="#" className="nav_link">ViewService</a></li>
    <li className="nav_item"><a href="#" className="nav_link">AllBooking</a></li> */}
                <Link to='/Homepage' className="nav_link">
                    <li className="nav_item"> Homepage </li>
                </Link>
                <Link to='/AddService' className="nav_link">
                    <li className="nav_item"> Addservice </li>
                </Link>
                <Link to='/Viewservice' className="nav_link">
                    <li className="nav_item"> ViewService </li>
                </Link>
                <Link to='/AllBooking' className="nav_link">
                    <li className="nav_item"> AllBooking </li>
                </Link>
                <Link to='/Contact' className="nav_link">
                    <li className="nav_item"> Contact </li>
                </Link>
                <Link to='/Aboutas' className="nav_link">
                    <li className="nav_item"> About us </li>
                </Link>

            </ul>
            <div onClick={navToggle} className="nav_toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
        {/* <div className="home-page-ser">
        <h1>Welcome to Our Website</h1>
            </div></> */}
            </>
    );
}

export default Anavbar;

