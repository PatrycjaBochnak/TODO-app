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

  const handleActiveButtonClick = () => {
    setDisplayedTasks(activeTasks);
    props.changeDisplayedTasks(activeTasks); // Przekazanie wyniku do komponentu nadrzędnego
  };

  const handleAllButtonClick = () => {
    setDisplayedTasks([...activeTasks, ...completedTasks]);
    props.changeDisplayedTasks([...activeTasks, ...completedTasks]); // Przekazanie wyniku do komponentu nadrzędnego
  };

  const handleCompletedButtonClick = () => {
    setDisplayedTasks(completedTasks);
    props.changeDisplayedTasks(completedTasks); // Przekazanie wyniku do komponentu nadrzędnego
  };

  return (
    <div className="nav-task">
      <div className="tasks-left">
        {props.tasks.filter((task) => task.active).length} tasks left
      </div>
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
  );
};

export default NavTask;
