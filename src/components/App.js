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
        important: false,
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
        text: "Read for 1 hour",
        date: "2024-05-05",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
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
  // deleteTask = (id) => {
  //   console.log("delete");
  //   const tasks = [...this.state.tasks];
  //   const index = tasks.findIndex((task) => task.id === id);
  //   tasks.splice(index, 1);
  //   this.setState({
  //     tasks,
  //   });
  //   // let tasks = [...this.state.tasks];
  //   // tasks = tasks.filter(task => task.id !== id)
  //   // this.setState({
  //   // tasks
  //   // })
  // };
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
changeTaskToShow = (filter) => {
  console.log(`Changing tasks to show: ${filter}`);
}
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main-app-content">
        <AddTask addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
          changeTasksToShow={this.changeTaskToShow}
        />
        <NavTask 
            tasks={this.state.tasks}
            changeTasksToShow={this.changeTaskToShow}
        />
        </div>
        <Footer />
        </div>
    );
  }
}

export default App;
