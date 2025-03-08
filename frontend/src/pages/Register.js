import { useState, useContext } from "react";
import { registerUser } from "../api/api";
import AuthContext from "../context/AuthContext";
import "./Register.css"; // Import external CSS for styling

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(formData);
      login(data.token);
    } catch (error) {
      console.error("Registration failed", error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form" autoComplete="off">
        <h2 className="form-title">Create an Account</h2>
        
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          autoComplete="name"
          className="input-field"
        />
        
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
          autoComplete="new-password"
          className="input-field"
        />
        
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
