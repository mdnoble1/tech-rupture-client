/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShowReview = ({ reviews }) => {
  // console.log(reviews);

  //   const { reviewer_name, reviewer_image, review, rating } = item;

  return (
    <div className="container mx-auto mt-16">
      <div>
        {reviews.length == 0 ? (
          <h2 className="font-bold text-2xl lg:text-4xl text-black mb-6 text-center uppercase">
            ---| No Reviews Yet |---
          </h2>
        ) : (
          <h2 className="font-bold text-2xl lg:text-4xl text-black mb-6 text-center uppercase">
            ---| Reviews |---
          </h2>
        )}
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-3/4 mx-auto my-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="avatar">
                  <div className="w-20 mask mask-squircle">
                    <img src={review.reviewer_image} />
                  </div>
                </div>
                <h2 className="font-medium text-2xl md:text-3xl text-[#13a0fe]">
                  {review.reviewer_name}
                </h2>
              </div>
              <p className="font-medium text-lg text-gray-500 mb-4">
                {review.review}
              </p>
              <div className="border border-[#13a0fe] w-10/12 lg:w-96 mx-auto mb-6"></div>
              <Rating
                className="mx-auto mb-12"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShowReview;
