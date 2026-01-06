import React from "react";

const Login = ({ setIsAuthenticated }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => setIsAuthenticated(true)}>
        Log In
      </button>
    </div>
  );
};

export default Login;
