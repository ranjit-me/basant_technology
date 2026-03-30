import "./App.css";
import { routes } from "./routes";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <>
      <div>
        <Navbar />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
