import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

const AppContent = () => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h3>
        {isAuth
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </h3>

      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {isAuth && (
        <button onClick={() => navigate("/playground")}>
          Hi Welcome to Code PlayGround
        </button>
      )}
      {isAuth && (
        <button onClick={() => setIsAuth(false)}>Log Out</button>
      )}

      <Routes>
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuth={isAuth}>
              <Playground />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuth={setIsAuth} />}
        />
      </Routes>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
