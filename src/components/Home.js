import React from "react";
import "../styles/Home.css";
const Home = () => {
    return (
        <div className="home">
            <div className="home-container">
                <h1>Continue Exploring</h1>
                <p>Travelier is your passport to the world's wonders. It helps you plan trips, discover hidden gems, and craft unique itineraries.
                    <br></br>Experience stunning landscapes, vibrant cultures, and diverse cuisines with ease.
                    <br></br>Travelier is your trusted companion for unforgettable journeys.
                    <br></br> Explore the world's splendor with Travelier.</p>
                <a href="#tours" className="explore_button">EXPLORE TOURS</a>
            </div>
        </div>
    );
};
export default Home;