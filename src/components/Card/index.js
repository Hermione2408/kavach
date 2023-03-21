import React from 'react';
import { useNavigate } from "react-router-dom";
import "./card.scss"
const Card = ({ data,currentPos }) => {
  const { name, contactNumber, latitude, longitude } = data;
  const navigate = useNavigate()
  const handleNavigateClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');

  };

  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <p>Contact number: {contactNumber}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleNavigateClick}>Navigate</button>
      </div>
    </div>
  );
};

export default Card;