import React from "react";
import { Link } from "react-router-dom";

function Hello() {
  return (
    <>
      <p>Hello, World! JSX Introduction </p>
      <h1>Hello Wold!</h1>
      <Link to="/passwordgen">
        <button className="bg-black text-white rounded-4xl p-3 hover:not-read-only:*:">
          Password Generator
        </button>
      </Link>
    </>
  );
}

export default Hello;
