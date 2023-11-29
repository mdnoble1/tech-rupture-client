import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import logo from "../../../assets/logo1.png"

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-[#13a0fe] rounded-tr-[45px] lg:rounded-tr-[120px] lg:px-32">
        <div className="text-white text-center pt-16 lg:py-16 lg::py-24">
          {/* <h2 className="font-medium text-2xl lg:text-3xl mb-6 uppercase">
            Tech Rupture
          </h2> */}
          <img className="w-40 lg:w-52 mx-auto mb-8" src={logo} alt="" />
          <h2 className="font-medium text-xl lg:text-2xl mb-6 uppercase">
            CONTACT US
          </h2>
          <p className="font-medium lg:text-xl">
            Tech Rupture Society, Tech Street PB 2981
          </p>
          <p className="font-medium lg:text-xl">+00 123456789</p>
          <p className="font-medium lg:text-xl">info@techrupture.project</p>
        </div>
        <div className="w-[1px] h-52 my-auto bg-white mx-auto hidden lg:block"></div>
        <div className="text-white text-center lg:text-xl py-16 lg:py-24">
          <h2 className="font-medium text-2xl lg:text-3xl mb-6">
            Follow US On
          </h2>
          <div className="flex items-center justify-center gap-8 text-2xl md:text-3xl">
            <NavLink>
              <FaFacebook />
            </NavLink>
            <NavLink>
              <FaInstagramSquare />
            </NavLink>
            <NavLink>
              <FaTwitterSquare />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] text-center py-4">
        <p className="font-medium text-xs md:text-xl text-white">
          Copyright © mdnoble.wd@gmail.com . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
