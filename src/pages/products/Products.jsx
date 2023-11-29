import { Helmet } from "react-helmet-async";
import ProductCard from "../../components/ProductCard";
import useProduct from "../../hooks/useProduct";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";

const Products = () => {
  const [products] = useProduct();

  // console.log(products);

  return (
    <section>
      <Helmet>
        <title>Tech Rupture | Products</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="flex items-center justify-center mt-16">
        <div>
          <input
            type="text"
            placeholder="Search For Products"
            className="input input-bordered input-info w-48 md:w-96 rounded-none rounded-l"
          />
        </div>
        <div>
          <input
            className="btn btn-outline rounded-none rounded-r font-bold text-xl text-white bg-[#13a0fe] border-0 hover:opacity-80"
            type="submit"
            value="Search"
          />
        </div>
      </div>
      <div className="container mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-16">
        {products.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Products;
