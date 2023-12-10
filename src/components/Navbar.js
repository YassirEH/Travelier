import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Travelier from "../images/Travelier.png";
import { socialMediaLinks } from "../data";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <ul className="services">
                    <a href="#"><img className="logo" src={Travelier} alt="logo" /></a>
                    <div className="menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Tours</a>
                    </div>

                    {Object.values(socialMediaLinks).map((link, index) => (
                        <li key={index}>
                            <a href={link.href}>
                                <FontAwesomeIcon icon={link.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;