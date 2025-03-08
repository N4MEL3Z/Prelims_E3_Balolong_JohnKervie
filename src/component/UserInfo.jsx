import React from "react";

const UserInfo = ({ user, setUser }) => {
  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  return (
    <div className="mt-3">
      <h2>Name: {user.name}</h2>
      <input
        type="text"
        className="form-control mt-2"
        value={user.name}
        onChange={handleNameChange}
        placeholder="Enter new name"
      />
    </div>
  );
};

export default UserInfo;
