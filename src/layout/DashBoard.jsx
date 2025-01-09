import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { FaBookBookmark, FaCalendar, FaCartFlatbedSuitcase } from 'react-icons/fa6';
import { IoMenuSharp } from 'react-icons/io5';
import { MdContactMail, MdOutlineReviews } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const DashBoard = () => {
    const [cart] = useCart()
    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="md:w-[250px] bg-[#D1A054] md:min-h-screen border-2">
                <div className='my-7 flex flex-col justify-center items-center'>
                    <p className='text-3xl font-bold'>BISTRO BOSS</p>
                    <p className='text-lg font-bold '>Restaurant</p>
                </div>
                <ul className="menu px-4 hidden md:block">
                    <li>
                        <Link to="/dashboard/userhome">
                            <FaHome />
                            User Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reservation">
                            <FaCalendar />
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/cart">
                            <FaCartFlatbedSuitcase />
                            <p>My Cart  <span className='p-1 bg-white rounded-full'>{cart.length}</span></p>
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reviews">
                            <MdOutlineReviews />
                            Add Review
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/mybookings">
                            <FaBookBookmark />
                            My Bookings
                        </Link>
                    </li>
                    <div className="divider px-2"></div>

                    <li>
                        <Link to="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/menu">
                            <IoMenuSharp />
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/salad">
                            <FaSearch />
                            Our Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/contact">
                            <MdContactMail />
                            Contact
                        </Link>
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
                        <Link to="/dashboard/userhome">
                            <FaHome />
                            User Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reservation">
                            <FaCalendar />
                            Reservation
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/cart">
                            <FaCartFlatbedSuitcase />
                            My Cart
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/reviews">
                            <MdOutlineReviews />
                            Add Review
                        </Link>
                    </li>
                    <li>
                        <Link to="/dashboard/mybookings">
                            <FaBookBookmark />
                            My Bookings
                        </Link>
                    </li>
                    <div className="divider px-2"></div>
                    <li>
                        <Link to="/">
                            <FaHome />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/menu">
                            <IoMenuSharp />
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/salad">
                            <FaSearch />
                            Our Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourShop/contact">
                            <MdContactMail />
                            Contact
                        </Link>
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
