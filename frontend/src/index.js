import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use react-dom/client
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";  // Import AuthProvider
import App from "./App";

// ✅ Use createRoot() instead of render()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
