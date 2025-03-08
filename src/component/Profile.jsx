import React, { useState } from "react";
import UserInfo from "./UserInfo";
import ProfilePicture from "./ProfilePicture";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    darkMode: false,
  });

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
      <h1>Profile</h1>
      <ProfilePicture />
      <UserInfo user={user} setUser={setUser} />
      <button className="btn btn-secondary mt-3" onClick={toggleDarkMode}>
        Toggle {user.darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default Profile;
