import { useState } from "react";
import "./styles/EightBall.css";

const EightBall = ({ responses }) => {
  const [message, setMessage] = useState("Think of a Question");
  const [ballClass, setClass] = useState("EightBall-container");

  const getRandomResponse = () => {
    const idx = Math.floor(Math.random() * responses.length);
    return responses[idx];
  };

  const ballClicked = () => {
    const { msg, color } = getRandomResponse();
    setMessage(msg);
    setClass(`EightBall-container-${color}`);
  };

  const resetBall = () => {
    setMessage("Think of a Question");
    setClass("EightBall-container");
  };

  return (
    <div className={ballClass} onClick={() => ballClicked()}>
      <h4>{message}</h4>
      {message !== "Think of a Question" && (
        <button
          className="EightBall-reset"
          onClick={(event) => {
            event.stopPropagation();
            resetBall();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
};

EightBall.defaultProps = {
  responses: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ],
};

export default EightBall;
