
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        {/* Status message */}
        <p>
          {isAuthenticated
            ? "Logged in, Now you can enter Playground"
            : "You are not authenticated, Please login first"}
        </p>

        {/* Conditional links */}
        <ul>
          {isAuthenticated && (
            <li>
              <Link to="/playground">PlayGround</Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>

        {/* Conditional buttons */}
        {isAuthenticated && (
          <>
            <button>Hi Welcome to Code PlayGround</button>
            <button onClick={() => setIsAuthenticated(false)}>Log Out</button>
          </>
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
