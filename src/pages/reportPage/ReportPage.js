import React from 'react';
import './ReportPage.css';
import { useNavigate, useLocation} from "react-router-dom";



const Card = ({ title, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <h3>{title}</h3>
    </div>
  );
};

const ReportPage = () => {

  const navigate = useNavigate()

  return (
    <div className="report">
      <h1>Report an issue</h1>
      <br/>
      <p>Get bounty score for authentic Information! </p>
      <div className="card-container">
        <Card title="Bad Road Condition" handleClick={() =>navigate('/report')} />
        <Card title="Violation of law" handleClick={() => navigate('/report1')} />
      </div>
    </div>
  );
};

export default ReportPage;