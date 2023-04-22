import React from "react";
import Task from "./Task"

const TaskList = (props) => {

  const tasks = props.tasks.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

  return (
    <>
  <div className="active">
    <h2>Tasks to do</h2>
    {tasks}
    </div>
    <hr/>
    <div className="done">
      <h2>Done tasks</h2>

    </div>
    </>
  );
};

export default TaskList;
