import React from 'react';
import { FaHome, FaSearch, FaUsers } from 'react-icons/fa';
import { FaBookBookmark, FaCalendar, FaCartFlatbedSuitcase } from 'react-icons/fa6';
import { IoMenuSharp } from 'react-icons/io5';
import { MdContactMail, MdOutlineReviews } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin()    // TODO:




    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-[250px] bg-[#D1A054] md:min-h-screen border-2">
                <div className='my-7 flex flex-col justify-center items-center'>
                    <p className='text-3xl font-bold'>BISTRO BOSS</p>
                    <p className='text-lg font-bold '>Restaurant</p>
                </div>
                <ul className="menu px-4 hidden md:block">
                    {
                        isAdmin ? <>


                            <li>
                                <NavLink to="/dashboard/userhome">
                                    <FaHome />
                                    Admin Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/additems">
                                    <GiForkKnifeSpoon />
                                    Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/cart">
                                    <FaCartFlatbedSuitcase />
                                    Manage Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviews">
                                    <MdOutlineReviews />
                                    Manage Bookings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUsers />
                                    All Users
                                </NavLink>
                            </li></>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userhome">
                                        <FaHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendar />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaCartFlatbedSuitcase />
                                        <p>My Cart  <span className='p-1 bg-white rounded-full'>{cart.length}</span></p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reviews">
                                        <MdOutlineReviews />
                                        Add Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mybookings">
                                        <FaBookBookmark />
                                        My Bookings
                                    </NavLink>
                                </li>
                            </>
                    }


                    <div className="divider px-2"></div>

                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/menu">
                            <IoMenuSharp />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/salad">
                            <FaSearch />
                            Our Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/contact">
                            <MdContactMail />
                            Contact
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile menu toggle */}
                <div className="flex md:hidden p-4 bg-[#D1A054]">
                    <button
                        className="text-white"
                        onClick={() =>
                            document
                                .getElementById("mobile-menu")
                                .classList.toggle("hidden")
                        }
                    >
                        DeshBoard
                    </button>
                </div>
                <ul
                    id="mobile-menu"
                    className="menu p-4 bg-[#D1A054] hidden md:hidden"
                >
                    <li>
                        <NavLink to="/dashboard/userhome">
                            <FaHome />
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar />
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaCartFlatbedSuitcase />
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reviews">
                            <MdOutlineReviews />
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/mybookings">
                            <FaBookBookmark />
                            My Bookings
                        </NavLink>
                    </li>

                    <div className="divider px-2"></div>

                    {/* Common Base */}
                    <li>
                        <NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/menu">
                            <IoMenuSharp />
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/salad">
                            <FaSearch />
                            Our Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/contact">
                            <MdContactMail />
                            Contact
                        </NavLink>
                    </li>

                </ul>
            </div>

            {/* Dashboard content */}
            <div className="flex-1 border-2 p-4 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;
