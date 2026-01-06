import React from "react";

const Login = ({ setIsAuth }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => setIsAuth(true)}>Log In</button>
    </div>
  );
};

export default Login;
