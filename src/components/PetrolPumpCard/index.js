import React from "react";
import './petrolpumpcard.css';
import PetrolPumpImage from "../../assets/imgs/petrolpump.svg"
const Card = ({ image, title, description, price }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={PetrolPumpImage} alt={title} className="card-image"/>
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <button>Click for details</button>
        <p className="card-description">{description}</p>
        <p className="card-price">{price}</p>
      </div>
    </div>
  );
};

export default Card;
