// import React, { useState } from "react";
import { useState } from "react";

function Change() {
  const [name, setName] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
    console.log(event);
  };
  return (
    <>
      <h1>Name:{name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default Change;
