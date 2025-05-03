import React from "react";

function UserProfile(props) {
  const { name, email, photoUrl } = props;
  return (
    <div className="profile-card">
      <h2>User Profile</h2>
      <img src={photoUrl} alt="User Photo" className="photo" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <a href={`mailto:${email}`}>Send Email</a>
    </div>
  );
}

export default UserProfile;
