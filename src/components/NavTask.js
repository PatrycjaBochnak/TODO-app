import React, { useState, useEffect } from "react";
import "../styles/NavTask.css";

const NavTask = (props) => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [displayedTasks, setDisplayedTasks] = useState([]);

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    const completed = props.tasks.filter((task) => task.active === false);

    setActiveTasks(active);
    setCompletedTasks(completed);
  }, [props.tasks]);

  const handleAllButtonClick = () => {
    props.changeDisplayedTasks([...activeTasks, ...completedTasks]);
  };

  const handleActiveButtonClick = () => {
    props.changeDisplayedTasks(activeTasks);
  };

  const handleCompletedButtonClick = () => {
    props.changeDisplayedTasks(completedTasks);
  };

  return (
    <div className="nav-task">
      <div className="tasks-left">
        {props.tasks.filter((task) => task.active).length} tasks left
      </div>
      <div className="buttons-container">
        <button className="all-tasks-btn" onClick={handleAllButtonClick}>
          All
        </button>
        <button className="active-tasks-btn" onClick={handleActiveButtonClick}>
          Active
        </button>
        <button
          className="completed-tasks-btn"
          onClick={handleCompletedButtonClick}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default NavTask;
