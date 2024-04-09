import React, { FC } from "react";
import "../styles/Task.css";

interface TaskProps {
  task: {
    id: number;
    title: string;
    text: string;
    date: string;
    active: boolean;
    finishDate: number | null;
    important: boolean;
  };
  change: (id: number) => void;
}

const Task: FC<TaskProps> = ({ task, change }) => {
  const importantStyle: React.CSSProperties = {
    color: "red",
  };

  const handleClickAlert = () => {
    const messages = [
      "you're awesome!",
      "keep up the good work!",
      "You're so cool! How come?",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const message = messages[randomIndex];

    const alertMessage = document.createElement("div");
    alertMessage.textContent = message;
    alertMessage.style.position = "fixed";
    alertMessage.style.top = "20px";
    alertMessage.style.left = "50%";
    alertMessage.style.transform = "translate(-50%, 0)";
    alertMessage.style.backgroundColor = "black";
    alertMessage.style.color = "white";
    alertMessage.style.padding = "10px";
    alertMessage.style.borderRadius = "5px";
    alertMessage.style.zIndex = "9999";

    document.body.appendChild(alertMessage);
    setTimeout(() => {
      document.body.removeChild(alertMessage);
      alertMessage.style.transition = "opacity 0.5s ease-out";
      alertMessage.style.opacity = "0";
    }, 1000);
  };

  const { text, date, id, active, finishDate, important } = task;

  if (active) {
    return (
      <div className="task-container">
        <p>
          <button onClick={() => {change(id); handleClickAlert();}}></button>
          <strong style={important ? importantStyle : undefined}>{text}</strong>
          {/* Do it until: <span>{date} </span> */}
        </p>
      </div>
    );
  } else {
    const finishedTime = finishDate
      ? new Date(finishDate).toLocaleString()
      : "";

    return (
      <div>
        <p>
          <strong style={important ? importantStyle : undefined}>{text}</strong> 
          {/* Do it until:{" "}
          <span>
            {date}
            <span> Done in:</span> {finishedTime}
          </span> */}
          {/* <button onClick={() => props.delete(id)}>X</button> */}
        </p>
      </div>
    );
  }
};

export default Task;
