import React, { Component } from 'react';

class Goal extends Component {
    constructor(props){
    super(props);
    this.state={
        text: '',
    }
}
handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(
      {[name]: value}
      );
  }
    render() {
        return (
            <div className='todo-apps' >
                <h1>Note for Today</h1>
                <textarea name="text" id="text" cols="30" rows="20" value={this.text} onChange={this.handleChange}></textarea>
            </div>
        );
    }
}

export default Goal;