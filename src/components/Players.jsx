import DartImg from "../images/target.png";

const Players = ({ player, cn, showScore, score }) => {
  const scoreList = [...showScore].map((score, index) => (
    <li key={index}>{score}</li>
  ));
  return (
    <>
      <div className={`dart-content__player ${cn}`}>
        <img src={DartImg} alt="target-icon" />
        <div className="dart-content__player__name">
          <p>
            Player {player} - <span>{score} pts</span>
          </p>
        </div>
        <div className="dart-content__player__points">
          <span>
            <p>{scoreList}</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Players;
