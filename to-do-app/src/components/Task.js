import React from "react";

const Task = (props) => {
  const importantStyle = {
    color: "red",
  };
  const handleClickAlert = () => {
    const message = document.createElement("div");
    message.textContent = "you're awesome!";
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.left = "50%";
    message.style.transform = "translate(-50%, 0)";
    message.style.backgroundColor = "black";
    message.style.color = "white";
    message.style.padding = "10px";
    message.style.borderRadius = "5px";
    message.style.zIndex = "9999";
    document.body.appendChild(message);
    
    setTimeout(() => {
      document.body.removeChild(message);
      message.style.transition = "textContent 0.5s ease-out";
    }, 1000);
  };
  const { text, date, id, active, finishDate, important } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? importantStyle : null}>{text}</strong> - Do
          it until: <span>{date} </span>
          <button onClick={() => {
            props.change(id);
            handleClickAlert()}}>
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
