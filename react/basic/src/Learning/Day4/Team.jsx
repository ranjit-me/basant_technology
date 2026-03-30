import StateComponent from "./StateComponent";
import React, { Component } from "react";
import StateImage from "./StateImage";
class Team extends Component {
  constructor() {
    super();
    //this.handleClick = this.handleClick.bind(this);
  }
  //   handleClick() {
  //     console.log(this);
  //   }
  handleClick = () => {
    console.log(this);
  };
  render() {
    return (
      <>
        {/* return <button onClick={this.handleClick.bind(this)}>Click Me</button>;        //First. way of passing this key word output is object  */}
        <button onClick={this.handleClick}>Click Me</button>;
        {/* this is for second and thirsd way */}
      </>
    );
  }
}
export default Team;
