import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./SignIn.css";
import farmBg from "../assets/farm-bg.jpeg";
import logo from "../assets/image.png";  
import googleLogo from "../assets/google-logo.jpeg";  

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || null;

  const handleNavigateToSignUp = () => {
    navigate("/signup", { state: { role } });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in successfully!");
  };

  return (
    <div
      className="signin-container"
      style={{ backgroundImage: `url(${farmBg})` }}
    >
      <header className="signin-header">
        <div className="logo">
          <img src={logo} alt="AgriConnect Logo" className="logo-img" />
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

      <div className="signin-box">
        <h2 className="title">Sign in</h2>
        <p className="subtitle">“Grow with knowledge, connect with AgriConnect”</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <div className="forgot-password">
            <button type="button" onClick={handleForgotPassword} className="link-btn">
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn">Sign in</button>
        </form>

        <div className="or-divider">Or continue with</div>
        <div className="social-login">
          <button className="google-btn">
            <img src={googleLogo} alt="Google Sign In" />
          </button>
          <button className="otp-btn">OTP</button>
        </div>

        <p className="signup-link">
          Don’t have an account?{" "}
          <button
            type="button"
            className="link-btn"
            onClick={handleNavigateToSignUp}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
