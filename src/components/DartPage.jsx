import { useEffect, useState } from "react";
import NumberTable from "./NumberTable";
import Players from "./Players";

const DartPage = () => {
  const [number, setNumber] = useState("");
  const [showScore, setShowScore] = useState([]);
  const [player1Score, setPlayer1Score] = useState([]);
  const [player2Score, setPlayer2Score] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [score1, setScore1] = useState(301);
  const [score2, setScore2] = useState(301);

  useEffect(() => {
    if (score1 <= 0) {
      console.log("Player 1 wins!");
    }
    if (score2 <= 0) {
      console.log("Player 2 wins!");
    }
  }, [score1, score2]);

  const addScore = () => {
    if (number !== "") {
      setShowScore([...showScore, number]);
      if (currentPlayer === 1) {
        setPlayer1Score([...player1Score, number]);
        setScore1(score1 - parseInt(number)); // subtract score only for player 1
        setCurrentPlayer(2); // switch to player 2's turn
      } else {
        setPlayer2Score([...player2Score, number]);
        setScore2(score2 - parseInt(number)); // subtract score only for player 2
        setCurrentPlayer(1); // switch to player 1's turn
      }
      setNumber("");
    }
  };

  return (
    <>
      <section className="dart-section">
        {score1 <= 0 || score2 <= 0 ? (
          <p className="win-msg">
            player <span>{score1 <= 0 ? "1" : "2"}</span> win!
            <button onClick={() => window.location.reload()}>Play Again</button>
          </p>
        ) : (
          <div className="container">
            <div className="dart-content">
              {/* player1 */}
              <Players
                player="1"
                cn="p1"
                number={number}
                showScore={player1Score}
                score={score1}
              />

              {/* number table */}
              <NumberTable
                cn="nb"
                number={number}
                setNumber={setNumber}
                addScore={addScore}
              />

              {/* player2 */}
              <Players
                player="2"
                cn="p2"
                number={number}
                showScore={player2Score}
                score={score2}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default DartPage;
