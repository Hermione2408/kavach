import React from 'react';
import './Assistance.css';
import { useNavigate } from 'react-router-dom';
const Card = ({ title, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
};

const Assistance = () => {
  const navigate = useNavigate()
  const handleCardClick = (title) => {
    if (title === 'Petrol Pump') {
      navigate("/petrolpumps") ;
    } else if (title === 'Chauffer') {
      navigate("/chauffer") ;
    }else if (title === 'Mechanic') {
      navigate("/mechanic") ;
      }
  };

  return (
    
    <div className="Assistance">
      <h1>For Your Help</h1>
      <div className="card-container">
        <Card title="Mechanics" handleClick={() => handleCardClick('Mechanic')} />
        <Card title="Petrol Pump" handleClick={() => handleCardClick('Petrol Pump')} />
        <Card title="Chauffer for Drunk" handleClick={() => handleCardClick('Chauffer')} />
      </div>
    </div>
  );
};

export default Assistance;