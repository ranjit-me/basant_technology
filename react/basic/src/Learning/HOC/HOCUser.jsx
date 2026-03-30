import React from "react";
import logo from "./delivery.svg";

function HOCUser(Wrapper) {
  return function NewComponent(props) {
    return (
      <div className="hoc-user">
        <Wrapper {...props} />
        <h1>You are Premium customer</h1>
        <img src={logo} className="hoc-logo w-30 h-50" alt="logo" />
        Faster delivery is available for you
      </div>
    );
  };
}

export default HOCUser;
