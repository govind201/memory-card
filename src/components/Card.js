import React from "react";
import "../styles/Card.css";

const Card = ({ image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="card" />
    </div>
  );
};

export default Card;
