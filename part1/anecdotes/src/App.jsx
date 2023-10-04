/*---------------------------------------------------
 |    1.12*, 1.13*, 1.14*: anecdotes step1,2,3      |                        
 ---------------------------------------------------*/
import { useState } from "react";

const Anecdote = ({ text, votes }) => (
  <div>
    <p>{text}</p>
    <p>Votos: {votes}</p>
  </div>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(
      randomIndex !== selected
        ? randomIndex
        : (randomIndex + 1) % anecdotes.length
    );
  };

  const handleVoteAnecdote = () => {
    setVotes(prevVotes => {
      const newVotes = {...prevVotes};
      newVotes[selected] = (newVotes[selected] || 0) + 1;
      return newVotes;
    });
  };

  const winnerIndex = Object.keys(votes).reduce(
    (a, b) => (votes[a] > votes[b] ? a : b),
    0
  );
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote text={anecdotes[selected]} votes={votes[selected] || 0} />
      <button onClick={handleVoteAnecdote}>Votar</button>
      <button onClick={handleNextAnecdote}>Siguiente Anécdota</button>

      {Object.keys(votes).length > 0 && (
        <div>
          <h2>Anecdote with most votes</h2>
          <Anecdote text={anecdotes[winnerIndex]} votes={votes[winnerIndex]} />
        </div>
      )}
    </div>
  );
};

export default App;
