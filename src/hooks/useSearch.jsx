import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSearch = (search) => {

        const axiosSecure = useAxiosSecure();
        

        console.log(search)

        


    // tan stack query 
    const { data : products= [] } = useQuery({
        queryKey: ["productItem" , search],
        queryFn: async () => {
            const res = await axiosSecure.get(`/products?tag=${search}`)
            return res.data;
        }
    });
    return [ products ];
};
 
export default useSearch;