// src/components/Loader.js

import React from 'react';
import './loader.css';

const Loader = ({ text }) => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>{text}</p>
    </div>
  );
};

export default Loader;
