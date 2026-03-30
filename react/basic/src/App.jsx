import Navbar from "./Home/Navbar";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Param from "./Learning/Day2/Products/Param";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="/prod/:prodId" element={<Param />} />
      </Routes>
    </div>
  );
}

export default App;
