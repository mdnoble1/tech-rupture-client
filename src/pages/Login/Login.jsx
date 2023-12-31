import { FaEye, FaEyeSlash } from "react-icons/fa";

import Swal from "sweetalert2";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.form?.pathname || "/";
  // console.log(
  //   "state in the location login page",
  //   location.state?.form?.pathname
  // );

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);

    signInUser(email, password)
      .then(() => {
        // const user = result.user;
        // console.log(user);
        //sweetalert
        Swal.fire({
          icon: "success",
          title: "User Successfully Logged In !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
        event.target.reset();
        navigate(from, { replace: true });
      })
      .catch(() => {
        // console.log(error)

        //sweetalert
        Swal.fire({
          icon: "error",
          title: "Email and Password Doesn't Match !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      });
    event.target.reset();
  };

  // const handleLoginWithGoogle = () => {
  //   signInWithGoogle()
  //     .then(() => {
  //       // console.log(result.user);

  //       //sweetalert
  //       Swal.fire({
  //         icon: "success",
  //         title: "User Successfully Logged In !",
  //         showClass: {
  //           popup: "animate_animated animate_fadeInDown",
  //         },
  //         hideClass: {
  //           popup: "animate_animated animate_fadeOutUp",
  //         },
  //       });
  //       navigate("/");
  //     })
  //     .catch(() => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "User Credentials Doesn't Match !",
  //         showClass: {
  //           popup: "animate_animated animate_fadeInDown",
  //         },
  //         hideClass: {
  //           popup: "animate_animated animate_fadeOutUp",
  //         },
  //       });
  //     });

  return (
    <section className="container mx-auto lg:mt-10">
      <Helmet>
        <title>Tech Rupture | Login</title>
      </Helmet>
      <div className="lg:flex items-center justify-center lg:gap-32">
        <div className="bg-gradient-to-r from-[#022889] to-[#13a0fe] w-full py-20 lg:py-96 text-center text-white rounded-b-xl lg:rounded-3xl">
          <Link to="/">
            <h2 className="font-bold text-5xl mb-4">Tech Rupture</h2>
          </Link>
          <h2 className="font-semibold text-4xl">Login </h2>
          <div className="font-semibold text-lg mt-10 text-center">
            <p>Admin Email : admin@ahmed.com</p>
            <p>Admin Password : 123456Aa$</p>
          </div>
          <div className="font-semibold text-lg mt-6 text-center">
            <p>Moderator Email : moderator@mia.com</p>
            <p>Moderator Password : 123456Aa$</p>
          </div>
        </div>
        <div className="w-11/12 lg:w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto">
          <form
            onSubmit={handleLogin}
            className="card-body lg:px-32 pt-12 lg:pt-32 "
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
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Type Your Password"
                  className="input rounded focus:border-[#13a0fe] w-full"
                  required
                />
                <span
                  className="absolute top-4 right-2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                </span>
              </div>
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="mt-4 text-center pb-12">
            <p className="font-medium text-lg mb-4">
              New in TechRupture ? Please{" "}
              <Link to="/register">
                <span className="text-[#13a0fe]">Register</span>
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
