import React from "react";

const Functional = () => {
  function payment() {
    <h1>Payment Code </h1>;
    console.log("Payment Done");
  }
  const handleClick = () => {
    alert("Say hi");
  };
  return (
    <div>
      <button onClick={handleClick}>Payment </button>
    </div>
  );
};

export default Functional;
