import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
  
  
    const handlesubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/login', {email, password,})
      .then(result =>  {console.log(result)
        if (result.data.status === "ok") {   // result.data
          navigate("/home")
        }
        
      })
      .catch(err => console.log(err))
    }
  
  
  
    return (
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Login</h2>
          <form onSubmit={handlesubmit}>
  
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
  
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
  
            <button type="submit" className="btn btn-success w-100 rounded-0">
              LOGIN
            </button>
  
            <p className="mt-2">Dont Have an Account?</p>
  
            <Link to="/register"
              type="button"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Register
            </Link>
          </form>
        </div>
      </div>
    );
}
export default Login;




















/*
function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              id="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              id="password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>

          <p className="mt-2">Don't Have an Account?</p>

          <Link to="/register"
            type="button"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}*/