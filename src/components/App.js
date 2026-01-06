import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import Login from "./Login";
import Playground from "./Playground";
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

      {/* NAVIGATION — DO NOT CHANGE STRUCTURE */}
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

      {/* ✅ REQUIRED BY TEST */}
      {isAuthenticated && (
        <button onClick={() => setIsAuthenticated(false)}>
          Log Out
        </button>
      )}

      <Routes>
        <Route
          path="/playground"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Playground />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path="*" element={<div>Page not Found</div>} />
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
