import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useMyProduct = () => {

        const axiosSecure = useAxiosSecure();
        const { user } = useAuth();

        console.log(user?.displayName)

        


    // tan stack query 
    const { data : items= [] } = useQuery({
        queryKey: ["item" , user?.displayName],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?product_owner=${user?.displayName}`)
            return res.data;
        }
    });
    return [ items ];
};
 
export default useMyProduct;