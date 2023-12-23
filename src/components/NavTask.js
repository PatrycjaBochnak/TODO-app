import React from "react";
import Task from "./Task";
import "../styles/NavTask.css"
const NavTask = (props) => {

    const active = props.tasks.filter((task) => task.active === true);


    const handleClickAllTasks = () => {
        document.getElementById("all-tasks").style.display = 'block';
    }
    const handleClickActiveTasks = () => {
        document.getElementById("active-tasks").style.display = 'block';
    }

    const handleClickCompletedTasks = () => {
        document.getElementById("done").style.display = 'block';
    }
    return(
        <div className="nav-task">
        <div className="tasks-left">{active.length} tasks left</div>
        <button className="all-tasks-btn"
          >All</button>
                 <button className="active-tasks-btn"
            onClick={() => {
                handleClickActiveTasks();
            }}
          >Active</button>
                 <button className="completed-tasks-btn"
            onClick={() => {
                handleClickCompletedTasks();
            }}
          >Completed</button>
        </div>
    )
}

export default NavTask;