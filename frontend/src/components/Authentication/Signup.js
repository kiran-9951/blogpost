import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const HandleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:2828/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);

        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="heading">Signup to Create your account</div>
        <form className="form" onSubmit={HandleSignup}>
          <div className="input-field">
            <input
              value={formData.username}
              onChange={(event) => {
                setFormData({ ...formData, username: event.target.value });
              }}
              required
              type="text"
              name="username"
              id="username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field">
            <input
              value={formData.email}
              onChange={(event) => {
                setFormData({ ...formData, email: event.target.value });
              }}
              required
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field">
            <input
              required
              value={formData.password}
              onChange={(event) => {
                setFormData({ ...formData, password: event.target.value });
              }}
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="btn-container">
            <button className="btn" type="submit">
              Submit
            </button>
            <div className="acc-text">
              Already have an account?{" "}
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
          </div>
        </form>
        {error && <p className="alert">{error}</p>}
      </div>
    </div>
  );
};

export default Signup;
