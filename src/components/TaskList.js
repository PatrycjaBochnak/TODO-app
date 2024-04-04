import React, { useState, useEffect, useRef } from "react";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const activeTasksRef = useRef(null);

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    setActiveTasks(active);
  }, [props.tasks]);

  useEffect(() => {
    if (activeTasksRef.current.scrollHeight > activeTasksRef.current.clientHeight) {
      setShowScrollbar(true);
    } else {
      setShowScrollbar(false);
    }
  }, [activeTasks]);

  return (
    <div className="tasks-list">
      <div className="active-tasks" ref={activeTasksRef} style={{ maxHeight: "340px", overflowY: "auto" }}>
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <Task key={task.id} task={task} change={props.change} />
          ))
        ) : (
          <p> You finished your tasks. Great job!</p>
        )}
      </div>
      {showScrollbar && (
        <input
          type="range"
          className="scrollbar"
          min="0"
          max={activeTasksRef.current.scrollHeight - activeTasksRef.current.clientHeight}
          onChange={(e) => {
            activeTasksRef.current.scrollTop = e.target.value;
          }}
        />
      )}
      {/* <div className="done">
        <h2 className="App-headings">Done tasks</h2>
        {completedTasks.length > 5 && <span>Preview for only 5 last tasks</span>}
        {completedTasks.slice(0, 5).map((task) => (
          <Task key={task.id} task={task} change={props.change} />
        ))}
      </div> */}
    </div>
  );
};

export default TaskList;
