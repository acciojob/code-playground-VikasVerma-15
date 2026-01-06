
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Playground from "./Playground";
import PrivateRoute from "./PrivateRoute";
import './../styles/App.css';
const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="main-container">
        <h3>
          {isAuth
            ? "You are authenticated"
            : "You are not authenticated, Please login first"}
        </h3>

        <ul>
          <li>
            <Link to="/playground">PlayGround</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>

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
          <Route path="*" element={<h3>Page not Found</h3>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
