import { useEffect, useState } from "react";
import DetailsCard from "../detailsCard/DetailsCard";
import { useParams } from "react-router-dom";
import useReviews from "../../../hooks/useReviews";
import ShowReview from "../showReview/ShowReview";
import ReviewForm from "../reviewForm/ReviewForm";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const { id } = useParams();

  // fetching reviews according to product name
  const [reviews] = useReviews(product);

  // console.log(reviews);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <section className="my-16">
      {/* details  */}
      <DetailsCard product={product}></DetailsCard>
      {/* reviews  */}
      <ShowReview reviews={reviews}></ShowReview>
      {/* review form  */}
      <ReviewForm></ReviewForm>
    </section>
  );
};

export default ProductDetails;
