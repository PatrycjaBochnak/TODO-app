import React, { useState, useEffect, useRef, FC } from "react";
import "../styles/TaskList.css";
import Task from "./Task";

interface TaskItem {
  id: number;
  active: boolean;
}

interface TaskListProps {
  tasks: TaskItem[];
  change: (id: number) => void;
}

const TaskList: FC<TaskListProps> = (props) => {
  const [activeTasks, setActiveTasks] = useState<TaskItem[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskItem[]>([]);
  const [showScrollbar, setShowScrollbar] = useState<boolean>(false);
  const activeTasksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const active = props.tasks.filter((task) => task.active === true);
    const completed = props.tasks.filter((task) => !task.active);

    setActiveTasks(active);
    setCompletedTasks(completed);
  }, [props.tasks]);

  useEffect(() => {
    if (activeTasksRef.current?.scrollHeight > activeTasksRef.current?.clientHeight) {
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
          <p>No active tasks</p>
        )}
      </div>
      {showScrollbar && (
        <div className="scrollbar-indicator">
          {/* Wyświetl dowolny element sygnalizujący, że jest pasek przewijania */}
        </div>
      )}
      <div className="completed-tasks" style={{ maxHeight: "340px", overflowY: "auto" }}>
        {completedTasks.map((task) => (
          <Task key={task.id} task={task} change={props.change} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
