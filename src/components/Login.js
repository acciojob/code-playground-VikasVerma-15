import React from "react";

const Login = ({ setIsAuthenticated }) => {
  return (
    <button onClick={() => setIsAuthenticated(true)}>
      Log In
    </button>
  );
};

export default Login;
