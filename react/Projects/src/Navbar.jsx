import { routingdata } from "./Data/RoutingData";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex flex-wrap gap-6 items-center">
        {routingdata
          .filter((item) => item.nav && item.path)
          .map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="hover:text-yellow-400 transition duration-200 font-medium"
            >
              {item.navName}
            </Link>
          ))}
      </div>
    </nav>
  );
}
export default Navbar;
