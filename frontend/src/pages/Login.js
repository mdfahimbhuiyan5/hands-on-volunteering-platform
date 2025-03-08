import { useState, useContext } from "react";
import { loginUser } from "../api/api";
import AuthContext from "../context/AuthContext";
import "./Login.css"; // Import external CSS for styling

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(formData);
      login(data.token);
    } catch (error) {
      console.error("Login failed", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form" autoComplete="off">
        <h2 className="form-title">Login to Your Account</h2>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
          autoComplete="email"
          className="input-field"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          autoComplete="current-password"
          className="input-field"
        />

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
