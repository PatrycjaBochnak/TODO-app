import React from "react";
import Task from "./Task"

const TaskList = (props) => {

  const active = props.tasks.filter(task => task.active === true)

  const completed = props.tasks.filter(task => task.active === false)

  const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)
  
  const completedTasks = completed.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>)

  return (
    <>
  <div className="active">
    <h2>Tasks to do</h2>
    {activeTasks}
    </div>
    <hr/>
    <div className="done">
      <h2>Done tasks</h2>
    {completedTasks}
    </div>
    </>
  );
};

export default TaskList;
