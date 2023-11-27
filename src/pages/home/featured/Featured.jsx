/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FaArrowAltCircleUp } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";

const Featured = ({ items }) => {
  return (
    <section className="my-16">
      <SectionTitle
        title={`Featured Innovations`}
        description={`Discover a future of innovation with our featured products—smart
        glasses, quantum computing, advanced drones, mind-reading tech, space
        habitats, solar-powered spacecraft, holographic displays, and
        bio implants. Redefine possibilities with these technological marvels.`}
      ></SectionTitle>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="text-center container mx-auto my-16"
        >
          <div>
            {items.map((item) => (
              <SwiperSlide key={item._id}>
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
                    <span className="font-semibold text-lg ml-4">
                      {item.vote}
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
