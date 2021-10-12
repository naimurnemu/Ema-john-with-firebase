import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import "./Login.css";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="login-form">
      <div>
        <h2>Login</h2>
        <form onSubmit="">
          <input type="email" placeholder="Enter email" />
          <br />
          <input type="password" placeholder="Enter password" />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to Ema-john? <Link to="/register">Create Account</Link>
        </p>
        <div>----------Or----------</div>
        <button onClick={signInWithGoogle} className="btn-regular">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
