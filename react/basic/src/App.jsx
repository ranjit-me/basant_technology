import { Routes, Route, Link } from "react-router-dom";
import Hello from "../Learning/Day1/Hello";
import LearningRoutes from "../Learning/Routes";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
      <LearningRoutes />
    </div>
  );
}

export default App;
