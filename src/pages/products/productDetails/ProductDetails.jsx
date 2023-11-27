import { useEffect, useState } from "react";
import DetailsCard from "../detailsCard/DetailsCard";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <section className="my-16">
      <DetailsCard product={product}></DetailsCard>
    </section>
  );
};

export default ProductDetails;
