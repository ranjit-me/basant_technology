import React, { useState } from "react";
function UseState() {
  const [name, setName] = useState("Ranjit");
  const handleClick = () => {
    setName("John Snow");
  };
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
export default UseState;
