import { HiMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import logo from "../../../../assets/logo1.png";
import { CgProfile } from "react-icons/cg";
import { ImBoxAdd } from "react-icons/im";
import { RiFileList3Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { RiCoupon2Fill } from "react-icons/ri";

const Topbar = () => {
  const isAdmin = true;

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
            {isAdmin ? (
              <div>
                <li className="mb-6">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <BsFillFileEarmarkBarGraphFill className="lg:text-3xl"></BsFillFileEarmarkBarGraphFill>{" "}
                    Statistics
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/allUsers"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <CgProfile className="lg:text-3xl"></CgProfile> Manage Users
                  </NavLink>
                </li>
                <li className="mb-10">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <RiCoupon2Fill className="lg:text-3xl"></RiCoupon2Fill>{" "}
                    Manage Coupons
                  </NavLink>
                </li>
              </div>
            ) : (
              <div>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/profile"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <CgProfile className="lg:text-3xl"></CgProfile>MY Profile
                  </NavLink>
                </li>
                <li className="mb-6">
                  <NavLink
                    to="/dashboard/addProduct"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <ImBoxAdd className="lg:text-2xl"> </ImBoxAdd> Add Product
                  </NavLink>
                </li>
                <li className="mb-10">
                  <NavLink
                    to="/dashboard/myProduct"
                    className={({ isActive }) =>
                      isActive
                        ? `text-[#13a0fe] flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                        : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    }
                  >
                    <RiFileList3Fill className="lg:text-3xl"></RiFileList3Fill>{" "}
                    My Product
                  </NavLink>
                </li>
              </div>
            )}
            <div className="border border-[#13a0fe] w-11/12 mx-auto mb-4"></div>
            {/* shared  */}
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
