import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import NavTask from "./NavTask";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

class App extends Component {
  counter = 3;
  state = {
    tasks: [
      {
        id: 0,
        text: "Get a job",
        date: "2024-10-08",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Wash my puppy",
        date: "2024-05-10",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Clean windows",
        date: "2024-05-05",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Make supper for friends",
        date: "2024-06-06",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Read for 1 hour",
        date: "2024-05-05",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
    displayedTasks: [],
  };

  addTask = (text, date, imporant) => {
    console.log("added task");
    const task = {
      id: this.counter,
      text,
      date,
      imporant,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  changeTaskStatus = (id) => {
    console.log("change");
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  changeAllTasks = (allTasks) => {
    console.log("Showing all tasks: ", 
    allTasks);
  };

  changeTaskToShow = (filter) => {
    console.log(`Changing tasks to show: ${filter}`);
  };

  changeDisplayedTasks = (displayedTasks) => {
    console.log("Changing displayed tasks:", displayedTasks);
    this.setState({ displayedTasks });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-app-content">
          <AddTask addTask={this.addTask} />
          <TaskList
          tasks={this.state.displayedTasks.length > 0 ? this.state.displayedTasks : this.state.tasks}
          change={this.changeTaskStatus}
          changeTasksToShow={this.changeTaskToShow}
        />
        <NavTask
          tasks={this.state.tasks}
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
