import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <section className="mx-2 md:mx-10 lg:mx-32 mt-16">
      <div className="overflow-x-auto rounded-t-md lg:rounded-t-2xl border border-[#13a0fe]">
        <table className="table table-xs lg:table-lg">
          {/* head */}
          <thead className="bg-[#13a0fe]">
            <tr className="font-bold lg:text-2xl text-white text-center">
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Moderator</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          {users?.map((user) => (
            <tbody key={user._id}>
              <tr className="font-semibold lg:text-xl text-black text-center">
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>
                  <button className="btn btn-outline text-semibold text-[#13a0fe] btn-xs lg:btn-md">
                    Moderator
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline text-semibold text-red-700 btn-xs lg:btn-md">
                    Admin
                  </button>
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
