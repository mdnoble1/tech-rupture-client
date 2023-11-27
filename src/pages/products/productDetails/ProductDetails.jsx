import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const [ product , setProduct ] = useState([]);


  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
        .then( res => res.json())
        .then(data => setProduct(data))
  }, [id]);

  return (
    <div>
      <h2>{product.name}</h2>
    </div>
  );
};

export default ProductDetails;
