import React from "react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="container">
      <p className="score">Score: {score}</p>
      <p className="bestScore">Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
