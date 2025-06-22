import React, { useState } from "react";
import "./UserProfile.css"; // Import the component-specific styles

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    address: {
      street: "123 Main St",
      city: "Seattle",
      country: "USA",
    },
  });

  const [addressInput, setAddressInput] = useState({
    street: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressInput((prev) => ({ ...prev, [name]: value }));
  };

  const updateAddress = () => {
    if (!addressInput.street || !addressInput.city || !addressInput.country) {
      alert("Please fill in all fields.");
      return;
    }

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      address: { ...prevProfile.address, ...addressInput },
    }));

    setAddressInput({ street: "", city: "", country: "" });
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p>
        <strong>Address:</strong>
      </p>
      <ul>
        <li>Street: {userProfile.address.street}</li>
        <li>City: {userProfile.address.city}</li>
        <li>Country: {userProfile.address.country}</li>
      </ul>

      <h3>Update Address</h3>
      <input
        type="text"
        name="street"
        placeholder="Street"
        value={addressInput.street}
        onChange={handleChange}
      />
      <input
        type="text"
        name="city"
        placeholder="City"
        value={addressInput.city}
        onChange={handleChange}
      />
      <input
        type="text"
        name="country"
        placeholder="Country"
        value={addressInput.country}
        onChange={handleChange}
      />
      <button onClick={updateAddress}>Update Address</button>
    </div>
  );
};

export default UserProfile;
