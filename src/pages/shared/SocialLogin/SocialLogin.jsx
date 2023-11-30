import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleLoginWithGoogle = () => {
    signInWithGoogle().then((result) => {
      // console.log(result.user);

      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };

      axiosPublic
        .post("/users", userInfo)
        .then((res) => {
          if (res.data.insertedId) {
            // console.log('user added to the database')
            // reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successful.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        })

        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "User Credentials Doesn't Match !",
            showClass: {
              popup: "animate_animated animate_fadeInDown",
            },
            hideClass: {
              popup: "animate_animated animate_fadeOutUp",
            },
          });
        });
    });
  };

  return (
    <div>
      <p className="font-medium text-lg">Or You Can Use</p>
      <button
        onClick={handleLoginWithGoogle}
        className="btn btn-circle btn-outline mt-4 text-[#13a0fe]"
      >
        <FaGoogle className="text-2xl"></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
