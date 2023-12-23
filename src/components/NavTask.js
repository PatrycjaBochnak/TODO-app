import React, { useState, useEffect } from "react";
import "../styles/NavTask.css";

const NavTask = (props) => {
  const [activeTasks, setActiveTasks] = useState("");
  const [completedTasks, setCompletedTasks] = useState("");

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    const completed = props.tasks.filter((task) => task.active === false);

    const activeTasksText = active.map((task) => task.text).join(", ");
    const completedTasksText = completed.map((task) => task.text).join(", ");

    setActiveTasks(activeTasksText);
    setCompletedTasks(completedTasksText);
  }, [props.tasks]);

  return (
    <div className="nav-task">
      <div className="tasks-left">
        {props.tasks.filter((task) => task.active).length} tasks left
      </div>
      <button
        className="all-tasks-btn"
        onClick={() => props.changeTaskToShow(activeTasks)}
      >
        All
      </button>
      <button
        className="active-tasks-btn"
        onClick={() => props.changeTaskToShow(activeTasks)}
      >
        Active
      </button>
      <button
        className="completed-tasks-btn"
        onClick={() => props.changeTaskToShow(completedTasks)}
      >
        Completed
      </button>
    </div>
  );
};

export default NavTask;
