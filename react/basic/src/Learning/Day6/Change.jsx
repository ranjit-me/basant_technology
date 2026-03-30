import { useState } from "react";

function Change() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-2xl font-semibold mb-4 border-b-2 border-white pb-2">
        Name: {name}
      </h1>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name..."
        className="px-4 py-2 rounded-lg border-2 border-white bg-transparent text-white outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 transition"
      />
    </div>
  );
}

export default Change;
