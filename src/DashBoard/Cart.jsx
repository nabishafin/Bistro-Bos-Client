import React from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import useCart from '../hooks/useCart';
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';


const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()

    const totalprice = cart.reduce((total, item) => total + item.price, 0)

    const handleDeleteFood = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                    refetch()
                })
        });
    }

    return (
        <div className='border-2 h-screen'>
            <HeadingTitle
                subheading={'Hurry Up!'}
                heading={'MANAGE ALL ITEMS'}
            >
            </HeadingTitle>
            <div className='bg-slate-100 p-2 md:p-5 mx-0 md:mx-5'>
                <div className='flex flex-col md:flex-row justify-between items-center my-3'>
                    <p className='text-2xl font-bold mb-2'> Total items: {cart.length}</p>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-3'>
                        <p className='text-2xl font-bold mb-2'>Total Price: $ {totalprice}</p>
                        <button className='btn mx-6  btn-success'> Pay</button>
                    </div>
                </div>
                <div className="">
                    <div className="overflow-y-auto h-96">
                        <table className="table-auto w-full border-collapse border border-gray-200">
                            {/* Table Head */}
                            <thead className="bg-[#D1A054]">
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">#</th>
                                    <th className="border border-gray-300 px-4 py-2">ITEM IMAGE</th>
                                    <th className="border border-gray-300 px-4 py-2">ITEM NAME</th>
                                    <th className="border border-gray-300 px-4 py-2">PRICE</th>
                                    <th className="border border-gray-300 px-4 py-2">Update</th>
                                    <th className="border border-gray-300 px-4 py-2">Delete</th>
                                </tr>
                            </thead>
                            {/* Table Body */}
                            <tbody className="bg-white">
                                {cart.map((cartItem, index) => (
                                    <tr key={cartItem._id} className="bg-base-200">
                                        <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                        <td className="border border-gray-300 px-4 py-2 flex items-center justify-center">
                                            <img
                                                src={cartItem.image || "https://via.placeholder.com/50"}
                                                alt="Item"
                                                className="w-12 h-12 object-cover rounded-full"
                                            />
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">{cartItem.name || "Unknown"}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">{`$${cartItem.price || 0}`}</td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded">Edit</button>
                                        </td>
                                        <td className="border border-gray-300 px-4 py-2 text-center">
                                            <button onClick={() => handleDeleteFood(cartItem._id)} className="px-4 py-2 bg-red-500 text-white rounded">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Cart;