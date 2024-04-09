import React, { Component, ChangeEvent, KeyboardEvent } from "react";
import "../styles/AddTask.css";

interface AddTaskState {
  text: string;
  checked: boolean;
  date: string;
}

interface AddTaskProps {
  addTask: (text: string, date: string, checked: boolean) => boolean;
}

class AddTask extends Component<AddTaskProps, AddTaskState> {
  state: AddTaskState = {
    text: "",
    checked: false,
    date: "2024-03-26",
  };

  handleDate = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      date: e.target.value,
    });
  };

  handleText = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      checked: e.target.checked,
    });
  };

  shortTaskAlert = (): void => {
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

  handleEnterKey = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  handleClick = (): void => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const addTask = this.props.addTask(text, date, checked);

      if (addTask) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().split("T")[0],
        });
      }
    } else {
      this.shortTaskAlert();
    }
  };

  render(): JSX.Element {
    return (
      <div className="form-todo">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Create a new todo..."
            value={this.state.text}
            onChange={this.handleText}
            onKeyDown={this.handleEnterKey}
          />
          {this.state.text.length > 0 && (
            <button className="todo-addtask" onClick={this.handleClick}>
              Add
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default AddTask;
