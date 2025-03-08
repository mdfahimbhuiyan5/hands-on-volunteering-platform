import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import AuthContext from "../context/AuthContext"; // Import AuthContext for user data

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext); // Access user data and logout function

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {user?.name}!</p>
      
      {/* Logout Button */}
      <button onClick={logout} style={{ marginBottom: '20px' }}>
        Logout
      </button>

      {/* Links to Event List and Volunteer Request List */}
      <div>
        <h3>Quick Actions</h3>
        <div style={{ marginTop: '20px' }}>
          <Link to="/events" style={{ marginRight: '10px' }}>View Events</Link>
          <span>|</span>
          <Link to="/volunteer-requests" style={{ marginLeft: '10px' }}>View Volunteer Requests</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
