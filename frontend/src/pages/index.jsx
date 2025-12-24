import { Link } from "react-router-dom";
import "../style.css";

export default function Landing() {
  return (
    <section className="landing-wrapper">
      <div className="landing-card">
        <div className="landing-content">
          <h1>
            Skilled Help,
            <span>just a tap away.</span>
          </h1>

          <Link to="/login" className="landing-btn primary">
            Sign In
          </Link>

          <Link to="/register" className="landing-link">
            Create an account
          </Link>
        </div>
      </div>
    </section>
  );
}
