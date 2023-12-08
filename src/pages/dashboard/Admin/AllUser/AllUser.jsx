import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   make admin button

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are You Sure?",
      text: `You Want To Make ${user.name} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();

            Swal.fire({
              title: "Successful!",
              text: `${user.name} is Now an Admin!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  //   make admin button

  const handleMakeModerator = (user) => {
    Swal.fire({
      title: "Are You Sure?",
      text: `You Want To Make ${user.name} a Moderator?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Moderator!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/moderator/${user._id}`).then((res) => {
          // console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();

            Swal.fire({
              title: "Successful!",
              text: `${user.name} is Now a Moderator!`,
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <section className="mx-2 md:mx-10 lg:mx-32 mt-16">
      <Helmet>
        <title>Dashboard | All User</title>
      </Helmet>

      <h2 className="font-bold text-2xl lg:text-4xl text-black mb-6 text-center uppercase">
        ---| Manage All Users |---
      </h2>
      <div className="mt-12 mb-4">
        <h2 className="font-bold text-xl lg:text-3xl ">
          TOTAL USERS : {users.length}
        </h2>
      </div>

      <div className="overflow-x-auto rounded-t-md lg:rounded-t-2xl border border-[#13a0fe]">
        <table className="table table-xs lg:table-lg">
          {/* head */}
          <thead className="bg-[#13a0fe]">
            <tr className="font-bold lg:text-2xl text-white text-center">
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Moderator</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          {users?.map((user, index) => (
            <tbody key={user._id}>
              <tr className="font-semibold lg:text-xl text-black text-center">
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>
                  {user.role === "moderator" ? (
                    <p className="font-bold text-lg text-green-700">
                      Moderator
                    </p>
                  ) : (
                    <button
                      onClick={() => handleMakeModerator(user)}
                      className="btn btn-outline text-semibold text-[#13a0fe] btn-xs lg:btn-md"
                    >
                      Moderator
                    </button>
                  )}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <p className="font-bold text-lg text-green-700">Admin</p>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-outline text-semibold text-red-700 btn-xs lg:btn-md"
                    >
                      Admin
                    </button>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default AllUser;
