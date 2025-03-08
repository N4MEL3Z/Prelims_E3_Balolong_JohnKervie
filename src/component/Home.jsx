import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Your Profile</h1>
      <p>Manage your profile settings and preferences.</p>
      <div className="mt-4">
        <Link to="/profile" className="btn btn-primary mx-2">
          Go to Profile
        </Link>
        <Link to="/settings" className="btn btn-secondary mx-2">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Home;
