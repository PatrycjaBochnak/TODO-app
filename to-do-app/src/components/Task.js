import React from "react";

const Task = (props) => {
  const importantStyle = {
    color: "red",
  };

  const { text, date, id, active, importantTask, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <p>
          <strong style={importantTask ? importantStyle : null}>{text}</strong>{" "}
          - Do it until: <span>{date} </span>
          <button onClick={() => props.change(id)}>Done</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finishedTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong style={importantTask ? importantStyle : null}>{text}</strong>{" "}
          Do it until:{" "}
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
