import React from "react";
import FunctionOne from "./FunctionOne";
import FuctionTwo from "./FunctionTwo";

function Day8() {
  const isUser = true;
  const data = isUser ? <FunctionOne /> : <FuctionTwo />;
  return (
    <div>
      <h1>Ternary Operator and using css in file</h1>
      {/* <FunctionOne />
      <FuctionTwo /> */}
      {data}
    </div>
  );
}

export default Day8;
