import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "2023-06-26",
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  shortTaskAlert = () => {
    const alertTask = document.createElement("div");
    alertTask.textContent = "too short message";
    alertTask.style.position = "fixed";
    alertTask.style.top = "20px";
    alertTask.style.left = "50%";
    alertTask.style.transform = "translate(-50%, 0)";
    alertTask.style.backgroundColor = "black";
    alertTask.style.color = "white";
    alertTask.style.padding = "10px";
    alertTask.style.borderRadius = "5px";
    alertTask.style.zIndex = "9999";
    document.body.appendChild(alertTask);
    setTimeout(() => {
      document.body.removeChild(alertTask);
      alertTask.style.transition = "textContent 0.5s ease-out";
    }, 1000);
  };

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const addTask = this.props.addTask(text, date, checked);

      if (addTask) {
        this.setState({
          text: "",
          checked: false,
          date: "2023-04-25",
        });
      }
    } else {
      this.shortTaskAlert();
    }
    this.setState({
      text: "",
    });
  };

  handleClear = () => {
    this.setState({
      text: "",
    });
  };

  render() {
    const minDate = "2023-04-26";
    const maxDate = "2029-12-31";

    return (
      <div className="form-todo">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Create a new todo..."
            value={this.state.text}
            onChange={this.handleText}
          />
          <button onClick={this.handleClear}>Clear</button>
          <label htmlFor="important" />
          Priority
          <input
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
        </div>
        <div className="date-input">
          <label htmlFor="date" />
          Complete task until:
          <input
            type="date"
            value={this.state.date}
            min={minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
        </div>
        <div className="todo-addtask">
          <button onClick={this.handleClick}>Add task</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
