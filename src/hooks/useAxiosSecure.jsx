import axios from "axios";


const axiosSecure = axios.create({
    baseURL: "https://tech-rupture-server.vercel.app"
}) 

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;