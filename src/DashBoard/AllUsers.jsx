import React from 'react';
import HeadingTitle from '../shared/HeadingTitle';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaUsers } from 'react-icons/fa';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        },
    });

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire("Deleted!", "User has been deleted.", "success");
                            refetch();
                        }
                    })
                    .catch(() => {
                        Swal.fire("Error!", "Failed to delete the user.", "error");
                    });
            }
        });
    };

    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Admin Role has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }



    return (
        <div>
            <div className="border-2 h-screen">
                <HeadingTitle
                    subheading={'How many??!'}
                    heading={'MANAGE ALL USERS'}
                />
                <div className="bg-slate-100 p-2 md:p-5 mx-0 md:mx-5">
                    <div className="md:flex-row my-3">
                        <p className="text-2xl font-bold mb-2">Total users: {users.length}</p>
                    </div>
                    <div>
                        {users.length === 0 ? (
                            <p className="text-center text-gray-500">No users found.</p>
                        ) : (
                            <div className="overflow-y-auto h-96">
                                <table className="table-auto w-full border-collapse border border-gray-200">
                                    {/* Table Head */}
                                    <thead className="bg-[#D1A054]">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2">#</th>
                                            <th className="border border-gray-300 px-4 py-2">NAME</th>
                                            <th className="border border-gray-300 px-4 py-2">EMAIL</th>
                                            <th className="border border-gray-300 px-4 py-2">ROLE</th>
                                            <th className="border border-gray-300 px-4 py-2">ACTION</th>
                                        </tr>
                                    </thead>
                                    {/* Table Body */}
                                    <tbody className="bg-white">
                                        {users.map(({ _id, name, email, role }, index) => (
                                            <tr key={_id} className="bg-base-200">
                                                <td className="border border-gray-300 px-4 py-2 text-center">{index + 1}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{name || "Unknown"}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">{email || "N/C"}</td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">
                                                    {
                                                        role === "admin" ? "Admin" :
                                                            <button onClick={() => handleMakeAdmin(_id)} className="px-4 py-2 bg-blue-500 text-white rounded">
                                                                <FaUsers />
                                                            </button>
                                                    }
                                                </td>
                                                <td className="border border-gray-300 px-4 py-2 text-center">
                                                    <button
                                                        onClick={() => handleDeleteUser(_id)}
                                                        className="px-4 py-2 bg-red-500 text-white rounded"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
