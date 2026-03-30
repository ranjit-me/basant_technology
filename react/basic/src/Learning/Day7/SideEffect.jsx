import { useEffect, useState } from "react";

function SideEffect() {
  const [value, setValue] = useState(0);
  const [dep, setDep] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   setValue(value + 1);
    // }, 1000);
    setValue(value + 1);
    // getWheather();
  }, [dep]);
  const handleClick = () => {
    setDep(!dep);
    // setDep(true);
  };
  return (
    <div>
      <h1 class="text-2xl font-bold text-black">
        Side Effect, setTimeout and useEffect Example
      </h1>
      <h1>Value:{value}</h1>
      <button
        onClick={handleClick}
        class="border-2 border-black rounded-2xl p-2"
      >
        Click me
      </button>
    </div>
  );
}
export default SideEffect;
