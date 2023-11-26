import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";
  console.log(
    "state in the location login page",
    location.state?.form?.pathname
  );

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      //sweetalert
      Swal.fire({
        title: "User Successfully Logged In !",
        showClass: {
          popup: "animate_animated animate_fadeInDown",
        },
        hideClass: {
          popup: "animate_animated animate_fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  return (
    <section className="container mx-auto lg:mt-10">
      <div className="lg:flex items-center justify-center lg:gap-32">
        <div className="bg-gradient-to-r from-[#022889] to-[#13a0fe] w-full py-20 lg:py-96 text-center text-white rounded-b-xl lg:rounded-3xl">
          <Link to="/"><h2 className="font-bold text-5xl mb-4">Tech Rupture</h2></Link>
          <h2 className="font-semibold text-4xl">Login </h2>
        </div>
        <div className="w-11/12 lg:w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto">
          <form
            onSubmit={handleLogin}
            className="card-body lg:px-32 pt-12 lg:pt-32 pb-12"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Type Your Email"
                className="input rounded focus:border-[#13a0fe]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-[#444]">
                  Password
                </span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Type Your Password"
                className="input rounded focus:border-[#13a0fe]"
                required
              />
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80"
                type="submit"
                value="Login"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium text-lg mb-4">
                New in TechRupture ? Please{" "}
                <Link to="/register">
                  <span className="text-[#13a0fe]">Register</span>
                </Link>
              </p>
              <p className="font-medium text-lg">Or Sign In With</p>
              <button className="btn btn-circle btn-outline mt-4 text-[#13a0fe]">
                <FaGoogle className="text-2xl"></FaGoogle>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
