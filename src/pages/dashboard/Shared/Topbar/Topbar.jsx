import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo1.png";
import { FaHome } from "react-icons/fa";
import TopbarNavigation from "../TopbarNavigation/TopbarNavigation";

const Topbar = () => {
  return (
    <div className="navbar bg-[#13a0fe] p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-3xl"
          >
            <HiMenuAlt1 />
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 border-2 border-[#13a0fe] rounded-box w-52">
            {/* conditional navigation  */}
            <TopbarNavigation></TopbarNavigation>

            <div className="border border-[#13a0fe] w-11/12 mx-auto mb-4"></div>

            {/* shared navigation  */}
            <li className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-[#13a0fe] flex items-center gap-3 font-bold uppercase`
                    : `text-black flex items-center gap-3 font-bold uppercase`
                }
              >
                <FaHome className="text-2xl"></FaHome>Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        <div>
          <NavLink to="/">
            <div className="text-[#13a0fe]">
              <img className="w-40 lg:w-52" src={logo} alt="" />
            </div>
          </NavLink>
          <p className={`font-bold text-xs tracking-[10px]`}>DASHBOARD</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
