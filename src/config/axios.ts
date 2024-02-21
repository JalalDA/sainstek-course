import store from "@/store";
import axios from "axios";


const CustomAxios = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_APP_HOST}/${process.env.NEXT_PUBLIC_API_VERSION}`
})

CustomAxios.interceptors.request.use(
    config => {
        const token = store.getState().auth.token
        if (token) {
            if (config.headers) config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log({ error });
        return Promise.reject(error)
    }
)

CustomAxios.interceptors.response.use(
    (response) => {
        // Modify the response data here

        return response;
    },
    (error) => {
        // Handle response errors here

        return Promise.reject(error);
    }
);

export default CustomAxios