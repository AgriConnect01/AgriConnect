import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./SignUp.css";
import farmBg from "../assets/farm-bg.jpeg";
import image from "../assets/image.png";  

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || null;

  const handleNavigateToSignIn = () => {
    navigate("/signin", { state: { role } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed up successfully!");
  };

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${farmBg})`,
      }}
    >
      <header className="signup-header">
        <div className="logo">
          <img src={image} alt="AgriConnect Logo" className="logo-img" />
          AgriConnect
        </div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/">Discussion</a>
          <a href="/">MarketPrices</a>
          <a href="/">Weather</a>
          <a href="/">Schemes</a>
          <a href="/">Overview</a>
          <a href="/">Contact</a>
          <a href="/">Subscribe</a>
        </nav>
      </header>

      <div className="signup-box">
        <h2 className="title">Sign up</h2>
        <p className="subtitle">“Empower the fields with your Knowledge”</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <MdEmail className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="btn">Sign up</button>
        </form>

        <p className="login-link">
          Already have an account?{" "}
          <button
            type="button"
            className="link-btn"
            onClick={handleNavigateToSignIn}
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
