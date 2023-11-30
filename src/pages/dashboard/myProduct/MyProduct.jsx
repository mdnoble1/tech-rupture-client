import useMyProduct from "../../../hooks/useMyProduct";

const MyProduct = () => {
  const [items] = useMyProduct();

  console.log(items);

  return (
    <section className="mx-2 md:mx-10 lg:mx-32 mt-16">
      <div className="overflow-x-auto rounded-t-md lg:rounded-t-2xl border border-[#13a0fe]">
        <table className="table table-xs lg:table-lg">
          {/* head */}
          <thead className="bg-[#13a0fe]">
            <tr className="font-bold lg:text-2xl text-white text-center">
              <th>Product Name</th>
              <th>Number of Votes</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {items?.map((item) => (
            <tbody key={item._id}>
              <tr className="font-semibold lg:text-xl text-black text-center">
                <th>{item.name}</th>
                <td>{item.vote}</td>
                <td className="text-red-700">Pending</td>
                <td>
                  <button className="btn btn-outline text-semibold text-[#13a0fe] btn-xs lg:btn-md">
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline text-semibold text-red-700 btn-xs lg:btn-md">
                    Delete
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

export default MyProduct;
