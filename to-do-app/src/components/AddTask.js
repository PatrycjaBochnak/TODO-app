import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toLocaleString().slice(0, 10),
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
  handleClick = () => {
    const { text, date, checked } = this.state;
    const addTask = this.props.addTask(text, date, checked);
    if (addTask) {
      this.setState({
        text: "",
        checked: false,
        date: new Date().toLocaleString().slice(0, 10),
      });
    }
  };

  render() {
    const minDate = "2023-04-26";

    let maxDate = "2023-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="add task"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important" />
        Priority
        <label htmlFor="date" />
        Complete task until:
        <input
          type="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <button onClick={this.handleClick}>Add task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
