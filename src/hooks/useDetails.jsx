import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure"

const useDetails = ( { id } ) => {

        const axiosSecure = useAxiosSecure();

        // console.log(id)

        


    // tan stack query 
    const { data: product=[]  } = useQuery({
        queryKey: ["product" , id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products/${id}`)
            return res.data;
        }
    });
    return [ product ];
};
 
export default useDetails;