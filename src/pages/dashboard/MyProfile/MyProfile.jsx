import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";

const MyProfile = () => {
  const { user } = useAuth();

  const { displayName, email, photoURL } = user || {};

  return (
    <section className="h-screen flex items-center justify-center">
      <Helmet>
        <title>Dashboard | My Profile</title>
      </Helmet>
      <div className="border border-[#13a0fe] rounded-xl">
        <div className="bg-[#13a0fe] rounded-t-xl px-16 md:px-24 lg:px-40 py-6 lg:py-10">
          <img className="w-52 md:w-60 rounded-lg" src={photoURL} alt="" />
        </div>
        <div className="text-center">
          <h2 className="font-semibold text-3xl lg:text-4xl text-center mt-8 uppercase">
            - Information -
          </h2>
          <div className="border border-[#13a0fe] mt-4 mb-8 mx-6 md:mx-10"></div>
          <h2 className="font-bold text-xl lg:text-2xl mb-4">
            Name : {displayName}
          </h2>
          <p className="font-bold text-xl lg:text-2xl mb-4">Email : {email}</p>
          <p className="font-bold text-xl lg:text-2xl">
            Status : <span className="text-red-600">Pending</span>
          </p>
        </div>
        <div className="text-center">
          <button className="btn btn-outline w-3/4 text-[#13a0fe] lg:text-xl my-8">
            Subscribe At <span className="text-red-600">29$/Month</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
