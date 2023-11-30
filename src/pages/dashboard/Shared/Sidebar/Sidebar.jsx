import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { ImBoxAdd } from "react-icons/im";
import logo from "../../../../assets/logo1.png";
import { CgProfile } from "react-icons/cg";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { RiCoupon2Fill } from "react-icons/ri";

const Sidebar = () => {
  const isAdmin = true;

  return (
    <div className="md:w-52 lg:w-96 bg-[#13a0fe] flex justify-center h-[1000px] min-h-full">
      <ul className="mt-6 lg:mt-12">
        <div className="text-black mb-10 lg:mb-20">
          <NavLink to="/">
            <div>
              <img className="w-40 lg:w-60 mb-2" src={logo} alt="" />
            </div>
          </NavLink>
          <p
            className={`font-bold text-sm lg:text-xl cinzel tracking-[3px] lg:tracking-[14px]`}
          >
            DASHBOARD
          </p>
        </div>
        {isAdmin ? (
          <div>
            <li className="mb-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                }
              >
                <RiCoupon2Fill className="lg:text-3xl"></RiCoupon2Fill> Manage
                Coupons
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
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
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
                    ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                    : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                }
              >
                <RiFileList3Fill className="lg:text-3xl"></RiFileList3Fill> My
                Product
              </NavLink>
            </li>
          </div>
        )}

        <div className="border text-white w-full mb-10"></div>

        {/* shared  */}
        <li className="mb-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `text-white flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
                : `text-black flex items-center gap-3 font-bold cinzel text-xs lg:text-xl uppercase`
            }
          >
            <FaHome className="lg:text-2xl"></FaHome>Home
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
