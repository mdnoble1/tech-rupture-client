import { Helmet } from "react-helmet-async";
import useProduct from "../../hooks/useProduct";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Featured from "./featured/Featured";
import Trending from "./trending/Trending";

const Home = () => {
  const [products] = useProduct();

  const featured = products.filter((product) => product.tag === "featured");
  const trending = products.filter((product) => product.tag === "trending");

  return (
    <div>
      <Helmet>
        <title>Tech Rupture | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Featured items={featured}></Featured>
      <Trending items={trending}></Trending>
      <Footer></Footer>
    </div>
  );
};

export default Home;
