import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (email === "admin@gmail.com" && password === "1234") {
      alert("Login Successful!");
      setError("");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Please login to continue</p>

        {error && <p className="error">{error}</p>}

        <div className="input-group">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        <div className="footer">
          <p>Don't have an account? <span>Register</span></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
