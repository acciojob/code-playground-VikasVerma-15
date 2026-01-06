import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate
} from "react-router-dom";

import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

const PlaygroundButton = () => {
  return (
    <button>
      Hi Welcome to Code PlayGround
    </button>
  );
};

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <p>
        {isAuthenticated
          ? "Logged in, Now you can enter Playground"
          : "You are not authenticated, Please login first"}
      </p>
      <ul>
        <li>
          <Link to="/playground">PlayGround</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>

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
              <PlaygroundButton />
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
