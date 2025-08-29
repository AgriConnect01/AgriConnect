import React from "react";
import { useNavigate } from "react-router-dom";
import "./GetStarted.css";
import bgImage from "../assets/bg.jpg";
import handIcon from "../assets/image.png"; 

export default function GetStarted() {
  const navigate = useNavigate();

  return (
    <div
      className="landing-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="overlay">
        <h1 className="logo-text">
          <img
            src={handIcon}
            alt="hand with plant"
            style={{
              width: "28px",
              height: "28px",
              marginRight: "8px",
              verticalAlign: "middle",
            }}
          />
          AgriConnect
        </h1>
        <p className="tagline">
          Empower your farming practices with expert guidance,
          <br />
          Connect with us and grow better.
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate("/join")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
