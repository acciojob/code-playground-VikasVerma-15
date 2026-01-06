import React from "react";

const Login = ({ setIsAuthenticated }) => {
  return (
    <div>
      <button onClick={() => setIsAuthenticated(true)}>
        Log In
      </button>
    </div>
  );
};

export default Login;
