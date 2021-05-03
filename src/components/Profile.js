import React, { useContext } from "react";
import UserContext from "../context/user/UserContext";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="card card-body text-center">
          <img
            src={selectedUser.avatar}
            alt=""
            className="card-img-top rounded-circle m-auto img-fluid"
            style={{ width: "100px" }}
          />
          <h3>{selectedUser.first_name + " " + selectedUser.last_name}</h3>
          <p>Email: {selectedUser.email}</p>
        </div>
      ) : (
        <h1>No user selected</h1>
      )}
    </>
  );
};

export default Profile;
