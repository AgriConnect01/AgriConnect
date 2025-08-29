import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Join.css";
import farmerIcon from "../assets/farmer.png";
import expertIcon from "../assets/expert.png";
import image from "../assets/image.png";  

export default function Join() {
  const [selectedRole, setSelectedRole] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (role) => {
    setSelectedRole(role);
  };

  const handleNavigation = (path) => {
    if (!selectedRole) {
      alert("Please select a role first!");
      return;
    }
    navigate(path, { state: { role: selectedRole } });
  };

  return (
    <div className="join-container">
      <nav className="navbar">
        <div className="logo">
          <img src={image} alt="logo" className="logo-icon" /> 
          <span>AgriConnect</span>
        </div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Discussion</li>
          <li>MarketPrices</li>
          <li>Weather</li>
          <li>Schemes</li>
          <li>Overview</li>
          <li>Contact</li>
          <li>Subscribe</li>
        </ul>
      </nav>
      <div className="join-header">
        <h1>Join</h1>
        <p>
          Bridge the gap between your field and expert solutions. <br />
          Connect with us and grow better.
        </p>
      </div>
      <div className="join-cards">
        <div
          className={`card ${selectedRole === "farmer" ? "selected" : ""}`}
          onClick={() => handleCardClick("farmer")}
        >
          <img src={farmerIcon} alt="farmer" className="card-icon" />
          <h2>I am a Farmer</h2>
          <p>Get personalized guidance and updates.</p>
        </div>

        <div
          className={`card ${selectedRole === "expert" ? "selected" : ""}`}
          onClick={() => handleCardClick("expert")}
        >
          <img src={expertIcon} alt="expert" className="card-icon" />
          <h2>I am an Expert</h2>
          <p>Share your knowledge and earn.</p>
        </div>
      </div>

      <div className="join-buttons">
        <button
          className={`btn-outline ${!selectedRole ? "disabled" : ""}`}
          onClick={() => handleNavigation("/signup")}
        >
          Sign up
        </button>
        <button
          className={`btn-outline ${!selectedRole ? "disabled" : ""}`}
          onClick={() => handleNavigation("/signin")}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
