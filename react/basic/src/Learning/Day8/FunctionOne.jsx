import React from "react";
function FuctionOne() {
  const data = {
    color: "red",
    backgroundColor: "yellow",
    marginTop: "12px",
  };
  return (
    <>
      <h1 style={data}>Function One</h1>
      <h2 style={{ color: "blue", backgroundColor: "red" }}>Heading two</h2>
    </>
  );
}
export default FuctionOne;
