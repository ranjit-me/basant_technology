import React, { Component } from "react";

class StateImage extends Component {
  constructor() {
    super();
    this.state = {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSAs8aJQ6G1xJJXZ8U72zuRlxTUKG9aPRsWeiIXVN5KqmSdeY-qw92DgU9XOH0&usqp=CAc",
    };
  }
  handleClick = () => {
    this.setState({
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4LagPWafpWcOLDNdRVPwqz0RsfyaYnFgFmQ&s",
    });
  };
  render() {
    return (
      <>
        <img src={this.state.img} alt="" />
        <button onClick={this.handleClick}>Click Me</button>
      </>
    );
  }
}
export default StateImage;
