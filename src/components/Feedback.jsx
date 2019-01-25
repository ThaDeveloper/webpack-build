import React, { Component } from 'react'

export default class Feedback extends Component {
  ///ES6 class properties
  state = {
    message: '',
  }

  handleChange = (event) => {
    //in case we had several input boxes we don't have to list each by name
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="container">
        <h2> Leave Feedback to our Class Component</h2>
        <label id="message-output">{this.state.message}</label>
          <form>
            <div className="form-group">
              <input type="text"
                name="message"
                onChange={this.handleChange} 
                placeholder="Enter text to see react state's beauty" 
                className="form-control"
              />
             </div>
         </form>
        </div> 
    )
  }
}
