import React from 'react';
import './loadSpinner.css';

const LoadSpinner = () => (
  <div className="spinner-wrapper">
    <div className="sk-chase">
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
      <div className="sk-chase-dot" />
    </div>
  </div>
);

export default LoadSpinner;
