import React from "react";
import Task from "./Task";
import '../styles/TaskList.css';

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);

  const completed = props.tasks.filter((task) => task.active === false);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const completedTasks = completed.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active-tasks">
        <h2 className="App-headings">Tasks to do</h2>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p> You finished your tasks. Great job!</p>
        )}
      </div>
      <hr />
      <div className="done">
        <h2 className="App-headings">
          Done tasks: <span>{completed.length}</span>
        </h2>
        {completed.length > 5 && <span>Preview for only 5 last tasks</span>}
        {completedTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
