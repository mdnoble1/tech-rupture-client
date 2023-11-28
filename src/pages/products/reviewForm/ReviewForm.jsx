/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import ButtonSky from "../../../components/ButtonSky"

const ReviewForm = ({ product }) => {
  const { name } = product;
  // console.log(name)

  const axiosSecure = useAxiosSecure();

  const { user } = useAuth();

  //   console.log(user?.displayName ,user?.photoURL);

  const handleReview = (e) => {
    e.preventDefault();

    // const reviewerName = e.target.name.value;
    // const reviewerImage = e.target.image.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;

    // console.log(reviewerName, reviewerImage, review, rating);

    const reviewItem = {
      product_name: name,
      reviewer_name: user?.displayName,
      reviewer_image: user?.photoURL,
      review,
      rating,
    };

    axiosSecure.post("/reviews", reviewItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Review Posted Successfully !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      }
    });

    e.target.reset();
  };

  return (
    <div className="container mx-auto mt-16">
      <h2 className="font-bold text-2xl lg:text-4xl text-black mb-16 text-center uppercase">
        ---| Review This Product |---
      </h2>
      <div className="w-11/12 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto pb-10">
        <form
          onSubmit={handleReview}
          className="card-body lg:px-32 pt-12 lg:pt-32 "
        >
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-20 mask mask-squircle">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h2 className="font-medium text-2xl md:text-3xl text-black">
                {user?.displayName}
              </h2>
            </div>
          </div>
          {/* review message  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
                Review Message
              </span>
            </label>
            <textarea
              name="review"
              id=""
              placeholder="Type Your Review"
              required
              cols="10"
              rows="10"
              className="textarea textarea-info"
            ></textarea>
          </div>
          {/* rating  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
                Rating
              </span>
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              className="range range-info"
            ></input>
            <div className="w-full flex justify-between px-2">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div className="mt-12">
        <Link to="/products">
          <ButtonSky buttonTitle={`Go Back`}></ButtonSky>
        </Link>
      </div>
    </div>
  );
};

export default ReviewForm;
