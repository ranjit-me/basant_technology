import React, { useState, useCallback, useEffect } from "react";

function Password() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [number, setNumber] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (character) str += "!@#$%^&*()_+{}[]||:><?/";
    if (number) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, character, number]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, number]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-[400px]">
        <h1 className="text-2xl font-bold text-center mb-4">
          Password Generator
        </h1>

        {/* Password Box */}
        <div className="flex mb-4">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 rounded-l-lg bg-gray-700 outline-none"
          />
          <button
            className="bg-blue-500 px-4 rounded-r-lg hover:bg-blue-600"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block mb-1">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full"
          />
        </div>

        {/* Options */}
        <div className="flex justify-between items-center mb-2">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber((prev) => !prev)}
          />
        </div>

        <div className="flex justify-between items-center">
          <label>Include Characters</label>
          <input
            type="checkbox"
            checked={character}
            onChange={() => setCharacter((prev) => !prev)}
          />
        </div>
      </div>
    </div>
  );
}

export default Password;
