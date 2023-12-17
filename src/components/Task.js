import React from "react";
import "../styles/Task.css"

const Task = (props) => {
  const importantStyle = {
    color: "red",
  };
  const handleClickAlert = () => {
    const message1 = document.createElement("div");
    message1.textContent = "you're awesome!";
    message1.style.position = "fixed";
    message1.style.top = "20px";
    message1.style.left = "50%";
    message1.style.transform = "translate(-50%, 0)";
    message1.style.backgroundColor = "black";
    message1.style.color = "white";
    message1.style.padding = "10px";
    message1.style.borderRadius = "5px";
    message1.style.zIndex = "9999";

    const message2 = document.createElement("div");
    message2.textContent = "keep up the good work!";
    message2.style.position = "fixed";
    message2.style.top = "20px";
    message2.style.left = "50%";
    message2.style.transform = "translate(-50%, 0)";
    message2.style.backgroundColor = "black";
    message2.style.color = "white";
    message2.style.padding = "10px";
    message2.style.borderRadius = "5px";
    message2.style.zIndex = "9999";

    const message3 = document.createElement("div");
    message3.textContent = "You're so cool! How come? ";
    message3.style.position = "fixed";
    message3.style.top = "20px";
    message3.style.left = "50%";
    message3.style.transform = "translate(-50%, 0)";
    message3.style.backgroundColor = "black";
    message3.style.color = "white";
    message3.style.padding = "10px";
    message3.style.borderRadius = "5px";
    message3.style.zIndex = "9999";

    const random = Math.random();

    if (random < 0.33) {
      document.body.appendChild(message1);
      setTimeout(() => {
        document.body.removeChild(message1);
        message1.style.transition = "textContent 0.5s ease-out";
      }, 1000);
    } else if (random < 0.66) {
      document.body.appendChild(message2);
      setTimeout(() => {
        document.body.removeChild(message2);
        message2.style.transition = "textContent 0.5s ease-out";
      }, 1000);
    } else {
      document.body.appendChild(message3);
      setTimeout(() => {
        document.body.removeChild(message3);
        message3.style.transition = "textContent 0.5s ease-out";
      }, 1000);
    }
  };

  const { text, date, id, active, finishDate, important } = props.task;

  if (active) {
    return (
      <div className="task-container">
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> - Do
          it until: <span>{date} </span>
          <button
            onClick={() => {
              props.change(id);
              handleClickAlert();
            }}
          >
            Done
          </button>
          <button
            onClick={() => {
              props.delete(id);
            }}
          >
            X
          </button>
        </p>
      </div>
    );
  } else {
    const finishedTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> Do
          it until:{" "}
          <span>
            {date}
            <span> Done in:</span> {finishedTime}
          </span>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
