import React, { useState, useEffect } from "react";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    const completed = props.tasks.filter((task) => task.active === false);

    setActiveTasks(active);
    setCompletedTasks(completed);
  }, [props.tasks]);

  return (
    <div className="tasks-list">
      <div className="active-tasks">
        <h2 className="App-headings">Tasks to do</h2>
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <Task key={task.id} task={task} change={props.change} />
          ))
        ) : (
          <p> You finished your tasks. Great job!</p>
        )}
      </div>
      <hr />
      {/* Dodaj logikę renderowania zadań */}
      <div className="done">
        <h2 className="App-headings">Done tasks</h2>
        {/* Dodaj logikę renderowania ukończonych zadań */}
        {completedTasks.length > 5 && <span>Preview for only 5 last tasks</span>}
        {completedTasks.slice(0, 5).map((task) => (
          <Task key={task.id} task={task} change={props.change} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
