import React from "react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div>
      <p>Score: {score}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
