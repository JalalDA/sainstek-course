import CustomAxios from "@/config/axios";
import { toast } from "react-toastify";

export const getCategory = async () => {
    try {
        const data = await CustomAxios.get(`/category`)
        return data?.data?.data
    } catch (error) {
        console.log({ error });
        toast.error("Terjadi kesalahan saat mengambil data")
    }
}