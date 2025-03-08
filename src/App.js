import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Profile from "./component/Profile";
import Settings from "./component/Settings";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    darkMode: false,
  });

  return (
    <Router>
      <div
        className={`container mt-3 ${
          user.darkMode ? "bg-dark text-light" : ""
        }`}
      >
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </nav>

        {/* Route Setup */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/settings"
            element={<Settings user={user} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
