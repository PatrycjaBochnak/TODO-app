import TaskList from "./TaskList";
import "../styles/NavTask.css";
const NavTask = (props) => {
  const active = props.tasks.filter((task) => task.active === true);

  return (
    <div className="nav-task">
      <div className="tasks-left">{active.length} tasks left</div>
      <button
        className="all-tasks-btn"
        onClick={() => props.changeTaskToShow("all")}
      >
        All
      </button>
      <button
        className="active-tasks-btn"
        onClick={() => props.changeTaskToShow("active")}
      >
        Active
      </button>
      <button
        className="completed-tasks-btn"
        onClick={() => props.changeTaskToShow("completed")}
      >
        Completed
      </button>
      <TaskList tasks={props.tasks} change={props.change} />
    </div>
  );
};

export default NavTask;
