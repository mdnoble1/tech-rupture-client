import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReviews = (product) => {

        const axiosSecure = useAxiosSecure();

        // console.log(product.name)

        


    // tan stack query 
    const { data : reviews= [] } = useQuery({
        queryKey: ["review" , product?.name],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reviews?product_name=${product.name}`)
            return res.data;
        }
    });
    return [ reviews ];
};
 
export default useReviews;