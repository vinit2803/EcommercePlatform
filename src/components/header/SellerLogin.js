import "../../style/Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerLogin = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/sellerlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.token === null) {
      props.showAlert("Please use valid credintials..", "danger");
    }
    if (json.token != null) {
      localStorage.setItem("token", json.token);
      props.showAlert("Logged in successfully..", "success");
      navigate("/");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="card shadow" style={{ width: "300px" }}>
              <div className="card-body">
                <h2 className="card-title text-center">Login</h2>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={credentials.email}
                    onChange={onChange}
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    value={credentials.password}
                    onChange={onChange}
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>

                <div className="text-center mt-3">
                  <p>
                    Don't have an account? <Link to="/SignUp">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SellerLogin;
