import React from "react";
const Login = ({ setIsAuth }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => setIsAuth(true)}>Login</button>
    </div>
  );
};

export default Login;
