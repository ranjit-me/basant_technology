import React, { useState } from "react";
function Child({ name }) {
  return <h1>Name:{name}</h1>;
}
const PropsSameFIle = () => {
  const [name, setName] = useState("Ranjit");
  return (
    <div>
      <h1 className="text-3xl">Props with useState</h1>
      <Child name={name} />
    </div>
  );
};

export default PropsSameFIle;
