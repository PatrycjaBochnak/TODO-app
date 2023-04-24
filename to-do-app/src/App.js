import React, { Component } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "get a job",
        date: "2022-10-08",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "wash my puppy",
        date: "2022-05-10",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "clean windows",
        date: "2022-05-05",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };
  deleteTask = (id) => {
    console.log("delete");
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
    });
    // let tasks = [...this.state.tasks];
    // tasks = tasks.filter(task => task.id !== id)
    // this.setState({
    // tasks
    // })
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
  render() {
    return (
      <div className="App">
        TODO APP
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
