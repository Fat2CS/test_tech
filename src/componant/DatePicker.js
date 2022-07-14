import React, { Component } from "react";
import Calendar from "react-calendar";
import "./DatePicker.css";

export default class DatePicker extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    };
  }

  onChange = (date) => {
    this.setState({
      date
    });
  };
  handlepickers = () => {
    console.log(this.state.date);
  };
  handlecancel = () => {
    console.log(new Date(Date.now()).toString());
    this.setState({ date: new Date(Date.now()).toString() });
  };
  render() {
    return (
      <div className="calendar">
        <p>Date</p>
        <Calendar onChange={this.onChange} />

        <div className="button">
          <button onClick={this.handlepickers}>Schedule</button>
          <button onClick={this.handlecancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
