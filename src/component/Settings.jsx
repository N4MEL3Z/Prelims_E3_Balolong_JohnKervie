import React from "react";

const Settings = ({ user, setUser }) => {
  const toggleDarkMode = () => {
    setUser((prevUser) => ({
      ...prevUser,
      darkMode: !prevUser.darkMode,
    }));
  };

  return (
    <div
      className={`container mt-5 ${user.darkMode ? "bg-dark text-light" : ""}`}
    >
      <h1>Settings</h1>
      <button className="btn btn-primary mt-3" onClick={toggleDarkMode}>
        Toggle {user.darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Settings;
