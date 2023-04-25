import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        text: '',
        checked: false,
        date: new Date().toLocaleString().slice(0, 10),
    } 
    render() {
        const minDate = new Date().toLocaleString().slice(0, 10)

        let maxDate = "2023-12-31"
    
        return (
            <div className='form'>
           <input type='text' placeholder='add task' value={this.state.text}/>
           <input type='checkbox' checked={this.state.checked} id='important'/>
           <label htmlFor='important'/>Priority
           <label htmlFor='date'/>Complete task until:
           <input type='date' value={this.state.date} min={minDate} max={maxDate}/>
           <button>Add task</button>
            <hr />
            </div>
        );
    }
}
 
export default AddTask;