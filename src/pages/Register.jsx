import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { handleRegister, usernameRef, passwordRef, emailRef } = useContext(AuthContext);

  return (
    <section className="register-container">
      <h1>Register form</h1>

      <form onSubmit={handleRegister}>
        <div className="input-wrapper">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={emailRef} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={usernameRef} />
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
        </div>

        <button className="btn-register">Register</button>
      </form>
      <div className="auth-switch">
        <p>
          Already have an account?{"  "}{" "}
          <button className="button-text" onClick={() => navigate("/login")}>
            Sign in
          </button>
        </p>
      </div>
    </section>
  );
};

export default Register;
