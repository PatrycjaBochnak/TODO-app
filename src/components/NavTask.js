import React from "react";
import "../styles/NavTask.css"
function NavTask() {
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
        <div classname="tasks-left-todo">x tasks left</div>
        <button className="all-tasks-btn"
            onClick={() => {
                handleClickAllTasks();
            }}
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