import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function User() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  if (!user) {
    navigate("/login");
  }

  return (
    <>
      <div>User</div>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Gender: {user.gender}</p>
          <img src={user.image} alt="User Avatar" />
          <p>Token: {user.token}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default User;
