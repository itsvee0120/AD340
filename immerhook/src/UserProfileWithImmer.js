import React, { useState } from "react";
import { useImmer } from "use-immer";
import "./UserProfileWithImmer.css";

const UserProfileWithImmer = () => {
  const [userProfile, updateUserProfile] = useImmer({
    name: "John Doe",
    email: "john.doe@example.com",
    contactDetails: {
      phone: "123-456-7890",
      address: "123 Main St, Springfield",
    },
    preferences: {
      newsletter: true,
      notifications: true,
    },
  });

  const [newPhone, setNewPhone] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const updateContactDetails = () => {
    updateUserProfile((draft) => {
      draft.contactDetails.phone = newPhone || draft.contactDetails.phone;
      draft.contactDetails.address = newAddress || draft.contactDetails.address;
    });
  };

  const toggleNewsletterSubscription = () => {
    updateUserProfile((draft) => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {userProfile.name}
      </p>
      <p>
        <strong>Email:</strong> {userProfile.email}
      </p>
      <p>
        <strong>Phone:</strong> {userProfile.contactDetails.phone}
      </p>
      <p>
        <strong>Address:</strong> {userProfile.contactDetails.address}
      </p>
      <p>
        <strong>Newsletter Subscription:</strong>{" "}
        {userProfile.preferences.newsletter ? "Subscribed" : "Unsubscribed"}
      </p>

      <button className="toggle-button" onClick={toggleNewsletterSubscription}>
        Toggle Newsletter Subscription
      </button>
      <br />
      <br />
      <input
        type="text"
        className="input-field"
        placeholder="New phone number"
        value={newPhone}
        onChange={(e) => setNewPhone(e.target.value)}
      />
      <input
        type="text"
        className="input-field"
        placeholder="New address"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <button className="update-button" onClick={updateContactDetails}>
        Update Contact Details
      </button>
    </div>
  );
};

export default UserProfileWithImmer;
