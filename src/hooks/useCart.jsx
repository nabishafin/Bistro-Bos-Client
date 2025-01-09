import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { axiosSecure } from './useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const { user } = useContext(AuthContext)


    const { refetch, data: cart = [] } = useQuery({

        queryKey: ['cart', user?.email || ''],
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })
    return [cart, refetch]
};

export default useCart;