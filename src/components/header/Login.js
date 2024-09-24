import "../../style/Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Framer Motion

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start animation on button click
    const response = await fetch("http://localhost:5000/api/auth/login", {
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

    if (json.token != null) {
      localStorage.setItem("token", json.token);
      props.showAlert("Logged in successfully..", "success");
      navigate("/");
    } else {
      setIsSubmitting(false); // Stop animation if login fails
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
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
              <motion.button
                type="submit"
                className="btn btn-primary w-100"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isSubmitting ? { scale: [1, 0.8, 1] } : { scale: 1 }}
                // Button animation on submission
              >
                Login
              </motion.button>

              <div className="text-center mt-3">
                <p>
                  Don't have an account? <Link to="/SignUp">Sign Up</Link>
                </p>
              </div>
              <div className="text-center mt-3">
                <p>
                  If you are a seller! want to log in{" "}
                  <Link to="/SellerLogin">Seller Login</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
