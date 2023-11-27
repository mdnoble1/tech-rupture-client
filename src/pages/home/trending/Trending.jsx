/* eslint-disable react/prop-types */
import { FaArrowAltCircleUp } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import ButtonSky from "../../../components/ButtonSky";

const Trending = ({ items }) => {
  return (
    <section className="my-16">
      <SectionTitle
        title={`Trending Innovations`}
        description={`Discover the latest trends in advanced drones, smart wearables, immersive audio, VR fitness, electric scooters, solar power, health monitors, and space-efficient smart gardens. Elevate your lifestyle with these cutting-edge innovations.`}
      ></SectionTitle>
      <div className="text-center container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.slice(0, 6).map((item) => (
          <div key={item._id}>
            <div className="w-80 mx-auto bg-gray-100 p-1 rounded-lg border border-[#13a0fe]">
              <img
                className="rounded-lg rounded-br-[100px]"
                src={item.image}
                alt=""
              />
              <div className="my-4 h-20">
                <h2 className="font-bold text-lg text-black mb-2">
                  {item.name}
                </h2>
                <p className="font-semibold text-sm text-gray-500 bg-sky-300 w-fit rounded px-2 mx-auto">
                  #{item.tag}
                </p>
              </div>
              <button className="btn btn-outline w-10/12 text-[#13a0fe] mt-2 mb-4">
                <FaArrowAltCircleUp className="text-4xl"></FaArrowAltCircleUp>
                <span className="font-semibold text-lg ml-4">{item.vote}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <ButtonSky buttonTitle={`Show all products`}></ButtonSky>
    </section>
  );
};

export default Trending;
