import React from 'react';
import { services } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Services.css";
import { faPlane, faHotel, faCar } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
        <div className="services-container">
            <h2 className="services-title">Our Services</h2>
            {services.map((service, index) => (
                <div className="service" key={index}> 
                    <h3 className="service-title">{service.title}</h3> 
                    <p className="service-description">{service.description}</p> 
                    <FontAwesomeIcon icon={service.icon} />
                </div>
            ))}
        </div>
    );
};

export default Services;
