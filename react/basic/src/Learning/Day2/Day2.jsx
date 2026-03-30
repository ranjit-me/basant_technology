import OnlyProps from "./OnlyProps";
import DestructureProps from "./DestructureProps";
import PropsSameFIle from "./PropsSameFIle";
import Student from "./Student";
import { Link } from "react-router-dom";

function Day2() {
  const students = [
    {
      name: "Ranjit",
      age: 21,
      isStudent: true,
    },
    {
      name: "Prathamesh",
      age: 21,
      isStudent: true,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-blue-700">
        Props Practice Day 2
      </h1>

      {/* Only Props */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <OnlyProps name="Ranjit" rollNo="205" marks="500" />
      </div>

      {/* Destructure Props */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <DestructureProps name="Rohit" rollNo="205" marks="500" />
      </div>

      {/* Same File Props */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <PropsSameFIle />
      </div>

      {/* Student List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {students.map((stu, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:scale-105 transition"
          >
            <Student student={stu} />
          </div>
        ))}
      </div>

      {/* Link Button */}
      <div className="text-center text-white">
        <Link
          to="/productmap"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Product Mapping and Params
        </Link>
      </div>
    </div>
  );
}

export default Day2;
