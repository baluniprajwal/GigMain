import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../style.css";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await api.post("/signup", formData);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="auth-wrapper">
      <div className="auth-card image-bg">
        <div className="auth-top">
          <Link to="/login" className="back-arrow">←</Link>
        </div>

        <div className="auth-body">
          <h1>Register Here</h1>
          <p>Create your new account</p>

          {error && <p className="error">{error}</p>}

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />

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

          <button onClick={handleSubmit}>Register</button>

          <div className="auth-link">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
