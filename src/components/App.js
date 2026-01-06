import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <p data-testid="auth-status">
          {isAuthenticated
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>

        <ul>
          <li>
            <Link to="/playground" data-testid="playground-link">PlayGround</Link>
          </li>
          <li>
            <Link to="/login" data-testid="login-link">Login</Link>
          </li>
        </ul>

        {isAuthenticated && (
          <>
            <button data-testid="playground-btn">Hi Welcome to Code PlayGround</button>
            <button data-testid="logout-btn" onClick={() => setIsAuthenticated(false)}>Log Out</button>
          </>
        )}

        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/playground"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Playground />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
