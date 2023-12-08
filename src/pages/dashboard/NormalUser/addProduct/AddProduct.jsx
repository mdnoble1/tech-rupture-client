import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleAddProduct = (e) => {
    e.preventDefault();

    const productName = e.target.name.value;
    const productImage = e.target.image.value;
    const productDescription = e.target.description.value;
    const tag = e.target.tag.value;
    const link = e.target.link.value;
    

    console.log( productName, productImage, productDescription, tag, link);


    const product = {
      product_owner: user?.displayName,
      owner_image: user?.photoURL,
      owner_email: user?.email,
      name: productName,
      image: productImage,
      description: productDescription,
      tag,
      link,
      vote: 0,
      timestamp: "2023-12-16"
    };

    axiosSecure.post("/products", product).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Product Added Successfully !",
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
    <div className="container mx-auto my-6 lg:my-12">
      <Helmet>
        <title>Dashboard | Add Product</title>
      </Helmet>
      <h2 className="font-bold text-2xl lg:text-4xl text-black mb-6 lg:mb-16 text-center uppercase">
        ---| Add A Product |---
      </h2>
      <div className="w-11/12 lg:w-3/4 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto lg:px-32">
        <form onSubmit={handleAddProduct} className="card-body">
          <h2 className="font-bold text-xl lg:text-2xl text-black text-center uppercase">
            Product Information
          </h2>
          <div className="">
            {/* product information  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  Product Name
                </span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Type Your Product Name"
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  Product Image URL
                </span>
              </label>
              <input
                type="text"
                name="image"
                required
                placeholder="Give Your Product Image URL"
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  Product Description
                </span>
              </label>
              <textarea
                name="description"
                placeholder="Type About Your Product"
                required
                cols="10"
                rows="5"
                className="textarea textarea-info"
              ></textarea>
            </div>
            {/* Owner Information  */}
            <h2 className="font-bold text-xl lg:text-2xl text-black text-center uppercase mt-8 mb-4">
              Owner Information
            </h2>
            <div className="">
              <h2 className="font-semibold text-xl md:text-xl text-black mb-2">
                Name : {user?.displayName}
              </h2>
              <h2 className="font-semibold text-xl md:text-xl text-black mb-2">
                Email : {user?.email}
              </h2>
              <div className="inline-flex items-center">
                <p className="font-semibold text-xl md:text-xl text-black">
                  Image :
                </p>
                <div className="w-20 mask mask-squircle">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
          </div>
          {/* others  */}
          <div className="flex items-center justify-between gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  Tag
                </span>
              </label>
              <input
                type="text"
                name="tag"
                placeholder="#"
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl text-black">
                  External Links
                </span>
              </label>
              <input
                type="text"
                name="link"
                placeholder="Source"
                className="input input-bordered input-info w-full"
              />
            </div>
          </div>
          <div className="form-control mt-6 mx-auto">
            <input
              className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80 w-40"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
