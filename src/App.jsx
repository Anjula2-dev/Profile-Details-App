 import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="profile-card">

        <h1>My Profile</h1>

        <img
          src="/profile.png"
          alt="Profile"
          className="profile-image"
        />

        <div className="profile-details">

          <div className="profile-item">
            <h3>Name</h3>
            <p>Dunal Anjula</p>
          </div>

          <div className="profile-item">
            <h3>Email</h3>
            <p>anjuladj65@gmail.com</p>
          </div>

          <div className="profile-item">
            <h3>Points</h3>
            <p>0</p>
          </div>

        </div>

        <button className="add-button">+</button>

      </div>
    </div>
  );
}

export default App;