import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import img1 from "../../../assets/BannerImage/1.png";
import img2 from "../../../assets/BannerImage/6.png";
import img3 from "../../../assets/BannerImage/7.png";
import img4 from "../../../assets/BannerImage/10.png";
import img5 from "../../../assets/BannerImage/8.png";
import img6 from "../../../assets/BannerImage/9.png";
import { Autoplay, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img5}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-bl-[45px] lg:rounded-bl-[120px] h-[220px] md:h-[320px] lg:h-[700px] w-full"
            src={img6}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
