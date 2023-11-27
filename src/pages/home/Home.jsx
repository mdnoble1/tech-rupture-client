import useProduct from "../../hooks/useProduct";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Featured from "./featured/Featured";

const Home = () => {

    const [ products ] = useProduct();


    const featured = products.filter((product) => product.tag === "featured");


    return (
        <div>
            <Navbar></Navbar>
            <Featured items={featured}></Featured>
            <Footer></Footer>
        </div>
    );
};

export default Home;