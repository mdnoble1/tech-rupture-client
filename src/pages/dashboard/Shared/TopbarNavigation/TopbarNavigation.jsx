import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { ImBoxAdd } from "react-icons/im";
import { RiCoupon2Fill, RiFileList3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const TopbarNavigation = () => {
  const isAdmin = true;

  return (
    <div>
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
              <RiFileList3Fill className="lg:text-3xl"></RiFileList3Fill> My
              Product
            </NavLink>
          </li>
        </div>
      )}
    </div>
  );
};

export default TopbarNavigation;
