/* eslint-disable react/prop-types */
import { FaArrowAltCircleUp } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { image, name, tag, vote } = item || {};

  return (
    <section>
      <div className="w-80 mx-auto bg-gray-100 p-1 rounded-lg border border-[#13a0fe]">
        <img className="rounded-lg rounded-br-[100px]" src={image} alt="" />
        <div className="my-4 h-20">
          <h2 className="font-bold text-lg text-black mb-2">{name}</h2>
          <p className="font-semibold text-sm text-gray-500 bg-sky-300 w-fit rounded px-2 mx-auto">
            #{tag}
          </p>
        </div>
        <button className="btn btn-outline w-10/12 text-[#13a0fe] mt-2 mb-4">
          <FaArrowAltCircleUp className="text-4xl"></FaArrowAltCircleUp>
          <span className="font-semibold text-lg ml-4">{vote}</span>
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
