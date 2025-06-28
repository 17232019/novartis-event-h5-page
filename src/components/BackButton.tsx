import React from 'react';
import './BackButton.css';

const BackButton: React.FC = () => (
  <button className="back-btn" onClick={() => window.history.back()}>
    <svg width="67" height="67" viewBox="0 0 67 67" fill="none">
      <circle cx="33.6" cy="33.6" r="33.6" fill="#FFD700"/>
      <path d="M39.6 21.6L28.8 33.6L39.6 45.6" stroke="#fff" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

export default BackButton; 