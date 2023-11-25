import { Link } from "react-router-dom";
import error from "../../assets/error.png";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center my-16 lg:my-0">
      <div className="lg:flex items-center justify-between gap-20">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-4xl">Oops...!</h1>
          <h2 className="text-3xl my-4">Page Not Found </h2>
          <p className="font-medium text-[#4B4B4B]">
            This Page doesn`t exist or was removed! <br /> We suggest you back
            to home.
          </p>
          <br />
          <Link to="/">
            <button className="btn mt-6 lg:text-lg text-white bg-[#407bff]">
              <FaArrowLeft></FaArrowLeft>
              Back To Home
            </button>
          </Link>
        </div>
        <div>
          <img className="w-10/12 lg:w-full mx-auto" src={error} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
