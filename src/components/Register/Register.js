import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create an Account</h2>
        <form onSubmit="">
          <input type="email" placeholder="Enter email" />
          <br />
          <input type="password" placeholder="Create password" />
          <br />
          <input type="password" placeholder="Confirm password" />
          <br />
          <input type="submit" value="Register" />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <div>----------Or----------</div>
        <button className="btn-regular">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
