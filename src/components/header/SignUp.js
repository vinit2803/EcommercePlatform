import React, { useState } from "react";
import "../../style/Login.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
      }),
    });
    const json = await response.json();
    console.log(json);

    if (json.message === "User created") {
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      // Handle error case
      alert(json.message || "Sign up failed");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="card shadow" style={{ width: "300px" }}>
          <div className="card-body">
            <h2 className="card-title text-center">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  minLength={3}
                  name="name"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  minLength={5}
                  type="password"
                  id="password"
                  name="password"
                  onChange={onChange} // Ensure onChange is here
                  className="form-control"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="role" name="role" className="form-label">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  onChange={onChange}
                  className="form-select"
                  required
                >
                  <option value="">Select role</option>
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
            <div className="text-center mt-3">
              <p>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
