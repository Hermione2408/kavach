import React, { useState } from 'react';
import './ProfilePage.css';
import AvatarImg from "../../assets/imgs/avatar.jpg"

function ProfilePage() {
  const [name, setName] = useState('Rahul Sharma');
  const [number, setNumber] = useState('+91 89555-5555');
  const [emergencyContact, setEmergencyContact] = useState('+91 8955-5555');
  const [bountyScore, setBountyScore] = useState(150);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save updated profile details
  };

  return (
    <div className="container">
      <div className="avatar-container">
        <img src={AvatarImg} alt="Avatar" className="avatar" />
      </div>
      <br/>
      <form className="profile-form" onSubmit={handleSubmit}>
        <label htmlFor="name" style={{color:"white",marginTop:"10px"}}>Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="number" style={{color:"white",marginTop:"10px"}}>Number:</label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />

        <label htmlFor="emergency_contact" style={{color:"white",marginTop:"10px"}}>Emergency Contact:</label>
        <input
          type="tel"
          id="emergency_contact"
          name="emergency_contact"
          value={emergencyContact}
          onChange={(e) => setEmergencyContact(e.target.value)}
          required
        />
 <br/>
        <button type="submit">Save Changes</button>
      </form>
      <div className="bounty-score">
        <h3>Bounty Score</h3>
        <div className="score-value">{bountyScore}</div>
      </div>
    </div>
  );
}

export default ProfilePage;