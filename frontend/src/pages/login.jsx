import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../style.css";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/login", formData);
      navigate("/"); // redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card image-bg">
        <div className="auth-top">
          <Link to="/" className="back-arrow">←</Link>
        </div>

        <div className="auth-body">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>

          {error && <p className="error">{error}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <div className="forgot">Forgot Password?</div>

          <button onClick={handleSubmit}>Login</button>

          <div className="auth-link">
            Don’t have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
