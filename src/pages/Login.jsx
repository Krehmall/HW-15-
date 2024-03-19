import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit, showCredentsEror, usernameRef, passwordRef } = useContext(AuthContext);

  return (
    <section className="login-container">
      <h1>Login form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" ref={usernameRef} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordRef} />
        </div>
        {showCredentsEror ? <p className="eror-text">*Invalid credentials!!!</p> : <p></p>}

        <button className="btn-login">Login</button>
      </form>
      <div className="auth-switch">
        <p>
          Don't have an account?{" "}
          <button className="button-text" onClick={() => navigate("/register")}>
            Sign up
          </button>
        </p>
      </div>
    </section>
  );
};

export default Login;
