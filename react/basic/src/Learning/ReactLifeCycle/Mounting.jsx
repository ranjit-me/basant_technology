import React, { Component } from "react";

class Mounting extends Component {
  constructor() {
    super();
    console.log("in constructor method");

    this.state = {
      name: "David",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("in getDerivedStateFromProps method");
    return null; // required
  }

  componentDidMount() {
    console.log("in componentDidMount method");
  }

  render() {
    console.log("in render method");
    return (
      <div>
        <h1>Hello name {this.state.name}</h1>
      </div>
    );
  }
}

export default Mounting;
