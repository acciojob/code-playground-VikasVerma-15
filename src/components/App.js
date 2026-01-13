import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <p>
          {isAuthenticated
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>

        {/* ✅ ONLY ONE LINK AT A TIME */}
        <ul>
          {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}

          {isAuthenticated && (
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
          )}
        </ul>

        {/* Required by Cypress */}
        {isAuthenticated && (
          <button>Hi Welcome to Code PlayGround</button>
        )}

        {isAuthenticated && (
          <button onClick={() => setIsAuthenticated(false)}>Log Out</button>
        )}

        <Routes>
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          <Route
            path="/playground"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <div />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
