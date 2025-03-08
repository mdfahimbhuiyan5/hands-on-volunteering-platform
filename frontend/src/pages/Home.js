import { Link } from "react-router-dom";
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="title">Welcome to HandsOn</h1>
        <p className="subtitle">A platform for social volunteering and impact tracking.</p>
        <div className="cta-buttons">
          <Link to="/register" className="cta-button register">Join Now</Link>
          <span className="divider">|</span>
          <Link to="/login" className="cta-button login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
