import { useState } from "react";
import Video1 from "../images/gif1.mp4";
import Video2 from "../images/gif2.mp4";
import Video3 from "../images/gif33.mp4";
import Video4 from "../images/gif4.mp4";

const NumberTable = ({ cn, number, setNumber, addScore }) => {
  const [video, setVideo] = useState("");
  const [hideVideo, setHideVideo] = useState(false);
  const [prevVideo, setPrevVideo] = useState(null);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);

  const videosArr = [Video1, Video2, Video3, Video4];

  const handleRandomVideo = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * videosArr.length);
    } while (videosArr[randomIndex] === prevVideo);

    const randomVideo = videosArr[randomIndex];
    setVideo(randomVideo);
    setPrevVideo(randomVideo);
    setHideVideo(false);
  };

  const numberClick = (value) => {
    setNumber(number + value);
  };

  const clearInput = () => {
    setNumber("");
  };

  const handleVideo = () => {
    setHideVideo(true);
    setNumber("");
    if (isPlayer1Turn) {
      setIsPlayer1Turn(false);
    } else {
      setIsPlayer1Turn(true);
    }
  };

  return (
    <>
      {video && (
        <div className="video-modal">
          {!hideVideo && (
            <video key={video} autoPlay muted onEnded={handleVideo}>
              <source src={video} type="video/mp4"></source>
            </video>
          )}
        </div>
      )}
      <div className={`dart-content__number-table ${cn}`}>
        <div className="overlay"></div>
        <p>{isPlayer1Turn ? "Player 1 Turn" : "Player 2 Turn"}</p>
        <div className="dart-content__number-table__input-numbers">
          {/* input */}
          <input type="number" readOnly value={number} />

          <div className="numbers-div">
            {/* digits */}
            <div className="numbers-div__1col">
              <button onClick={() => numberClick("1")}>1</button>
              <button onClick={() => numberClick("2")}>2</button>
              <button onClick={() => numberClick("3")}>3</button>
              <button onClick={() => numberClick("4")}>4</button>
              <button onClick={() => numberClick("5")}>5</button>
              <button onClick={() => numberClick("6")}>6</button>
              <button onClick={() => numberClick("7")}>7</button>
              <button onClick={() => numberClick("8")}>8</button>
              <button onClick={() => numberClick("9")}>9</button>
            </div>
            <div className="numbers-div__2col">
              <button onClick={() => numberClick("0")}>0</button>
              <button onClick={clearInput}>C</button>
            </div>
            <button
              onClick={() => {
                handleRandomVideo();
                addScore();
              }}
              className="add-score"
            >
              Add Score
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberTable;
