import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaCartArrowDown } from "react-icons/fa";
import useCart from '../hooks/useCart';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()




    const links =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/ourShop/salad'>Our Shop</Link></li>
            <li><Link to='/'>
                <button className="flex items-center gap-1 ">
                    <FaCartArrowDown size={20} />
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link></li>
        </>

    return (
        <div>
            <div className="navbar     z-10 bg-black text-white " >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul>
                        {!user && (
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                        )}
                    </ul>


                    {user && (
                        <div className='dropdown dropdown-end z-50'>
                            <div
                                tabIndex={0}
                                role='button'
                                className='btn btn-ghost btn-circle avatar'
                            >
                                <div title={user?.displayName} className='w-10 rounded-full'>
                                    <img
                                        referrerPolicy='no-referrer'
                                        alt='User Profile Photo'
                                        src={user?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black'
                            >
                                <li>
                                    <Link to='/add-job' className='justify-between'>
                                        Add Job
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/my-posted-jobs'>My Posted Jobs</Link>
                                </li>
                                <li>
                                    <Link to='/my-bids'>My Bids</Link>
                                </li>
                                <li>
                                    <Link to='/bid-requests'>Bid Requests</Link>
                                </li>
                                <li className='mt-2'>
                                    <button
                                        onClick={() => logOut()}
                                        className='bg-gray-200 block text-center'
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Navbar;