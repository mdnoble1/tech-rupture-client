/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { TbMessageReport } from "react-icons/tb";
import { Helmet } from "react-helmet-async";

const DetailsCard = ({ product }) => {
  const { image, name, description, tag, link, vote, timestamp } = product;

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 justify-center w-11/12">
      {name && (
        <Helmet>
          <title>{`Tech Rupture | ${name}`}</title>
        </Helmet>
      )}
      <div className="col-span-2">
        <div>
          <img className="rounded md:rounded-lg" src={image} alt="" />
        </div>
        <div className="w-11/12 mt-4 mb-6 mx-auto lg:mx-0">
          <p className="font-medium text-lg md:text-xl text-gray-500 text-center lg:text-left">
            {description}
          </p>
        </div>
      </div>
      <div className="border border-[#13a0fe] rounded-t-lg h-fit">
        <h2 className="font-semibold text-2xl md:text-3xl bg-[#13a0fe] text-center py-12 text-white rounded-lg rounded-br-[30px] md:rounded-br-[50px]">
          {name}
        </h2>
        <div className="flex justify-between items-center mt-4 lg:mt-10 px-4">
          <p className="">
            <span className="font-semibold text-lg text-black">tags : </span>
            <span className="font-semibold text-sm text-gray-500 bg-sky-300 w-fit rounded px-2 mx-auto">
              # {tag}
            </span>
          </p>
          <NavLink
            className="font-semibold text-lg text-sky-600 underline"
            to={`${link}`}
          >
            Sources / Links
          </NavLink>
        </div>
        <p className="mt-4 px-4 font-semibold text-lg text-gray-500">
          Posted On : {timestamp}
        </p>
        <div className="border border-[#13a0fe] my-8 mx-8"></div>
        <div className="flex justify-between items-center px-4 mt-2 mb-8">
          <button className="btn btn-outline text-[#13a0fe]">
            <FaArrowAltCircleUp className="text-4xl"></FaArrowAltCircleUp>
            <span className="font-semibold text-lg ml-4">{vote}</span>
          </button>
          <button className="btn btn-outline text-red-700">
            <TbMessageReport className="text-4xl"></TbMessageReport>
            <span className="font-semibold text-lg uppercase">Report</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
