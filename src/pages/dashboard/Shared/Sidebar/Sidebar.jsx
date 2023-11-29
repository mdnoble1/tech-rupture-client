import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { ImBoxAdd } from "react-icons/im";
import logo from "../../../../assets/logo1.png";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="md:w-52 lg:w-96 bg-[#13a0fe] flex justify-center min-h-screen">
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
        <li className="mb-6">
          <NavLink
            to="/dashboard/userHome"
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
            to="/dashboard/reservation"
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
            to="/dashboard/payment"
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

        <div className="border text-white w-full mb-10"></div>
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
