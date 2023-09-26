import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img src='https://i.ibb.co/LYvFCFF/logo.png' alt="" />
        </div>
        <div className="flex-none">
          <ul className="flex space-x-12">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-700 font-bold underline" : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) =>
                  isActive ? "text-red-700 underline font-bold" : ""
                } to="/donation">Donation</NavLink>
            </li>
            <li>
              <NavLink  className={({ isActive }) =>
                  isActive ? "text-red-700 underline font-bold" : ""
                } to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
