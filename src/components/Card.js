import React from "react";

const Card = ({ image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="card" />
    </div>
  );
};

export default Card;
