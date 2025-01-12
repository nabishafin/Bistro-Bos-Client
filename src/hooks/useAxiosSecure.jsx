import axios from "axios";
import { useContext } from "react";
import { Await, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)

    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config
    },
        function (error) {
            return Promise.reject(error)
        })

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            navigate('/login')
            await logOut()
        }
        return Promise.reject(error)
    })

    return axiosSecure
};





export default useAxiosSecure;