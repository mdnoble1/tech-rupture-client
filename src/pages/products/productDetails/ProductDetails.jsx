import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const id = useParams()

    console.log(id)




    return (
        <div>
            <h2>Ekhane product details dekhabo</h2>
        </div>
    );
};

export default ProductDetails;