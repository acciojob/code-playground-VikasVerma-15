import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>

      {/* Navigation (links are OK, Cypress clicks buttons) */}
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {/* ✅ ONLY show these buttons when authenticated */}
      {isAuthenticated && (
        <>
          <button>Hi Welcome to Code PlayGround</button>
          <button onClick={() => setIsAuthenticated(false)}>
            Log Out
          </button>
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
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
