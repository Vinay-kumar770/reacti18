import React from 'react';
import './Cards.css';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={onClick}>{buttonText}</button>
    </div>
  );
};

export default CardComponent;