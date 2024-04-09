import React, { Component, ReactNode } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import NavTask from "./NavTask";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

interface Task {
  id: number;
  title: string;
  date: string;
  important: boolean;
  active: boolean;
  finishDate: number | null;
}

interface AppState {
  tasks: Task[];
  displayedTasks: Task[];
}

class App extends Component<{}, AppState> {
  counter: number = 5;

  state: AppState = {
    tasks: [
      {
        id: 0,
        title: "Get a job",
        date: "2024-10-08",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        title: "Wash my puppy",
        date: "2024-05-10",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        title: "Clean windows",
        date: "2024-05-05",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        title: "Make supper for friends",
        date: "2024-06-06",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        title: "Read for 1 hour",
        date: "2024-05-05",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
    displayedTasks: [],
  };

  addTask = (title: string, date: string, important: boolean): boolean => {
    const task: Task = {
      id: this.counter,
      title,
      date,
      important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  changeTaskStatus = (id: number): void => {
    const updatedTasks = this.state.tasks.map((task) =>
      task.id === id ? { ...task, active: false, finishDate: Date.now() } : task
    );

    this.setState({ tasks: updatedTasks });
  };

  changeAllTasks = (allTasks: Task[]): void => {
    console.log("Showing all tasks:", allTasks);
  };

  changeTaskToShow = (filter: string): void => {
    console.log(`Changing tasks to show: ${filter}`);
  };

  changeDisplayedTasks = (displayedTasks: Task[]): void => {
    console.log("Changing displayed tasks:", displayedTasks);
    this.setState({ displayedTasks });
  };

  render(): ReactNode {
    const { tasks, displayedTasks } = this.state;

    return (
      <div className="App">
        <Header />
        <div className="main-app-content">
          <AddTask addTask={this.addTask} />
          <TaskList
            tasks={displayedTasks.length > 0 ? displayedTasks : tasks}
            change={this.changeTaskStatus}
          />
          <NavTask
            tasks={tasks}
            changeTaskToShow={this.changeTaskToShow}
            changeDisplayedTasks={this.changeDisplayedTasks}
            changeAllTasks={this.changeAllTasks}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
