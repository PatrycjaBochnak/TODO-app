import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toLocaleString().slice(0, 10),
    } 

    handleDate = (e) => {
        this.setState({
            date: e.target.value,
        })
    }

    render() {
        const minDate = "2023-04-26"

        let maxDate = "2023-12-31"
    
        return (
            <div className='form'>
           <input type='text' placeholder='add task' value={this.state.text}/>
           <input type='checkbox' checked={this.state.checked} id='important'/>
           <label htmlFor='important'/>Priority
           <label htmlFor='date'/>Complete task until:
           <input type='date' value={this.state.date} min={minDate} max={maxDate} onChange={this.handleDate}/>
           <button>Add task</button>
            <hr />
            </div>
        );
    }
}
 
export default AddTask;