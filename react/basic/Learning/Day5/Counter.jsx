import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>Couter</button>
    </>
  );
}
export default Counter;
