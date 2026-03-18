import React, { Component } from "react";
//setState methos using in this code there are three ways of usign three setState

class StateComponent extends Component {
  constructor() {
    super();
    this.state = { name: "Ranjit" };
    // this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick = () => {
  //     this.setState({ name: "John Snow" });
  //   };
  handleClick() {
    this.setState({ name: "John Snow" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>;
      </div>
    );
  }
}
export default StateComponent;
