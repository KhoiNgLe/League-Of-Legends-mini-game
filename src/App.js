import { useState } from "react";
import "./App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "/img/ashe.jpg" },
  { src: "/img/lulu.jpg" },
  { src: "/img/riven.jpg" },
  { src: "/img/singed.jpg" },
  { src: "/img/soraka.jpg" },
  { src: "/img/volibear.jpg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>League of Legends Mini Game</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard card ={card} key={card.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;
