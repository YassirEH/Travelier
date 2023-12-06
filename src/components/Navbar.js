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
                    <a href="#home"><img className="logo" src={Travelier} alt="logo" /></a>
                    <div className="menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#tours">Tours</a>
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