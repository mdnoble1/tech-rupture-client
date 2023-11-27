/* eslint-disable react/prop-types */
// import { FaArrowAltCircleUp } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import ButtonSky from "../../../components/ButtonSky";
import ProductCard from "../../../components/ProductCard";
import { Link } from "react-router-dom";

const Trending = ({ items }) => {
  return (
    <section className="my-16">
      <SectionTitle
        title={`Trending Innovations`}
        description={`Discover the latest trends in advanced drones, smart wearables, immersive audio, VR fitness, electric scooters, solar power, health monitors, and space-efficient smart gardens. Elevate your lifestyle with these cutting-edge innovations.`}
      ></SectionTitle>
      <div className="text-center container mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.slice(0, 6).map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
      <Link to="/products">
        <ButtonSky buttonTitle={`Show all products`}></ButtonSky>
      </Link>
    </section>
  );
};

export default Trending;
