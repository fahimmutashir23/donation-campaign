import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Navbar = () => {

  const {logOut, user} = useContext(AuthContext)
  
  const handleLogOut = () => {
    logOut()
  }

  return (
    <div>
      <div className="navbar bg-transparent flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img src='https://i.ibb.co/LYvFCFF/logo.png' alt="" />
        </div>
        <div className="flex-none">
          <ul className="flex space-x-12 items-center">
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
            {
              user && <li>
              <NavLink  className={({ isActive }) =>
                  isActive ? "text-red-700 underline font-bold" : ""
                } to="/donation">Donation</NavLink>
            </li>
            }
            {
              user && <li>
              <NavLink  className={({ isActive }) =>
                  isActive ? "text-red-700 underline font-bold" : ""
                } to="/statistics">Statistics</NavLink>
            </li>
            }
        
            <li>
              <NavLink  className={({ isActive }) =>
                  isActive ? "text-red-700 underline font-bold" : ""
                } to="/registration">Registration</NavLink>
            </li>
            <li>
              {
                user? <>
                <button onClick={handleLogOut} className="btn btn-accent"><div className="space-y-1">
                  <p>Signout</p>
                  <p className="text-xs uppercase">{user.displayName}</p></div></button>
                  
                </> :
                <NavLink to="/login" className="btn btn-accent">Login</NavLink>
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
