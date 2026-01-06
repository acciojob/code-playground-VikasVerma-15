
import React from "react";

const Login = ({ setIsAuthenticated }) => {
  return (
    <button data-testid="login-btn" onClick={() => setIsAuthenticated(true)}>
      Log In
    </button>
  );
};

export default Login;
