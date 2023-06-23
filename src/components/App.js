import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../styles/App.css";
import Scoreboard from "./Scoreboard";
import cardsData from "../cardsData";

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const shuffledCards = shuffleArray(cardsData);
    setCards(shuffledCards);
  }, []);

  const handleClick = (id) => {
    if (selectedIds.includes(id)) {
      setScore(0);
      setSelectedIds([]);
      return;
    }
    setSelectedIds([...selectedIds, id]);
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }
    setScore(score + 1);
    const shuffledCards = shuffleArray(cardsData);
    setCards(shuffledCards);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div>
      <Scoreboard score={score} bestScore={bestScore} />
      <div className="cards-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            onClick={() => handleClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
