import { useState, useEffect } from "react";

function Dependency() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Button</button>
      <h1>Multiple of count by 2: {calculation}</h1>
    </>
  );
}

export default Dependency;
