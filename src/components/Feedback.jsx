import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Feedback extends Component {
  // ES6 class properties
  state = {
    name: '',
    message: '',
    user: {},
  }

  handleChange = (e) => {
    // in case we had several input boxes we don't have to list each by name
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, message } = this.state;
    this.setState({ user: { name, message } });
    this.setState({ name: '', message: '' });
  };

  render() {
    const { name, message, user } = this.state;
    return (
      <div className="container">
        <h2 className="header"> Leave Feedback to Web Guru</h2>
        <div id="output">
          <label>Name:</label><p>{user.name}</p>
          <label>Message:</label>
          <p id="message-output">{user.message}</p>
        </div>
        <hr/>
        <form >
          <div className="form-group">
            <input type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Enter your name"
              className="form-control"
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Comment:</label>
            <textarea type="text"
              name="message"
              onChange={ this.handleChange }
              placeholder="Enter text to see react state's beauty"
              className="form-control"
              rows="5"
              value={message}
            />
            </div>
            <button type="submit"
              className="btn btn-success btn-lg"
              onClick={this.handleSubmit}>
              Send
            </button>
        </form>
      </div>
    );
  }
}

Feedback.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
};
