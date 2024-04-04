import React, { useState, useEffect, useRef } from "react";
import "../styles/TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const [activeTasks, setActiveTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const activeTasksRef = useRef(null);

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    const completed = props.tasks.filter((task) => !task.active); // Zmiana: Filtruj zadania zakończone

    setActiveTasks(active);
    setCompletedTasks(completed);
  }, [props.tasks]);

  useEffect(() => {
    if (activeTasksRef.current.scrollHeight > activeTasksRef.current.clientHeight) {
      setShowScrollbar(true);
    } else {
      setShowScrollbar(false);
    }
  }, [activeTasks, props.tasks]);

  return (
    <div className="tasks-list">
      <div className="active-tasks" ref={activeTasksRef} style={{ maxHeight: "340px", overflowY: "auto" }}>
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <Task key={task.id} task={task} change={props.change} />
          ))
        ) : (
          <p>No active tasks</p> // Dodanie komunikatu, gdy nie ma aktywnych zadań
        )}
      </div>
      {showScrollbar}
      <div className="completed-tasks"> 
        {completedTasks.map((task) => ( 
          <Task key={task.id} task={task} change={props.change} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
