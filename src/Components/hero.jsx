import React from 'react';
import './hero.css'; // Add custom styles here

function Hero() {
    return (
        <div className="hero">
            <nav className="navbar">
                <div className="logo">WatchWise</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#movies">Movies</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button className="login-btn">Login</button>
            </nav>
            <div className="hero-content">
                <h1>Welcome to WatchWise</h1>
                <p>Your ultimate destination for discovering and enjoying movies.</p>
                <button className="explore-btn">Explore Now</button>
            </div>
        </div>
    );
}

export default Hero;