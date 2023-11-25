import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="container mx-auto lg:mt-10">
      <div className="lg:flex items-center justify-center lg:gap-32">
        <div className="w-11/12 lg:w-full bg-slate-100 rounded-lg drop-shadow-2xl mx-auto">
          <form className="card-body lg:px-32 pt-12 lg:pt-32 pb-12">
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
                value="Register"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium text-lg mb-4">
                Already A Member ? Please{" "}
                <Link to="/login">
                  <span className="text-[#13a0fe]">Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="bg-gradient-to-r from-[#022889] to-[#13a0fe] w-full py-20 lg:py-96 text-center text-white rounded-b-xl lg:rounded-3xl">
          <h2 className="font-bold text-5xl mb-4">Tech Rupture</h2>
          <h2 className="font-semibold text-4xl">Register</h2>
        </div>
      </div>
    </section>
  );
};

export default Register;
