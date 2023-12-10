import axios from "axios";
import React, { useState, useEffect } from "react";

function Tours() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        axios.get("https://localhost:7078/api/Tours/Get All").then((response) => {
            setTours(response.data);
        });
    }, []);

    return (
        <div className="tours-container">
            <h2 className="tours-title">Our Tours</h2>
            {tours.map((tour, index) => (
                <div className="tour" key={index}>
                    <img className="tour-image" src={tour.image} alt={tour.name} />
                    <div className="tour-info">
                        <h3 className="tour-name">{tour.name}</h3>
                        <h4 className="tour-price">${tour.price}</h4>
                        <p className="tour-description">{tour.description}</p>
                        <p className="tour-location">Location: {tour.location}</p>
                        <p className="tour-country">Country: {tour.country}</p>
                        <p className="tour-departure">Departure: {tour.departureFormatted}</p>
                        <p className="tour-return">Return: {tour.returnFormatted}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tours;