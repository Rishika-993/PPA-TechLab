import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from '../../assets/Icon.svg';
import ThemeBtn from './ThemeBtn';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className=''>
            <div className='bg-[#F5F7FA] w-full items-center flex fixed z-50 top-0 left-0 right-0 justify-between px-6 md:px-12 lg:px-[160px] py-6'>
            <div className='flex space-x-2 items-center order-2 lg:order-1'>
                <img className="h-4 w-6 md:h-6 md:w-9" src={Icon} alt="Icon" />
                <div className='text-xl md:text-2xl font-bold'>Nexcent</div>
            </div>
            <div className="lg:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-gray-700 focus:outline-none"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <div className={`lg:flex lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} w-full order-1`}>
                <ul className="flex flex-col mt-4 font-medium font-inter lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <NavLink
                            to="/home"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/service"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            Service
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact-us"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            Feature
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            Testimonial
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/github"
                            className={({ isActive }) =>
                                `block py-2 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* <div className='order-4'>
                 <ThemeBtn  />   
            </div> */}
            <div className="flex items-center order-3">
                <ThemeBtn/>
                <Link
                    to="#"
                    className="text-[#4CAF4F] hover:bg-[#F5F7FA] focus:ring-4 focus:ring-[#F5F7FA] font-medium rounded-md text-xs md:text-sm px-2 md:px-5 py-1 md:py-2.5 mr-2 focus:outline-none"
                >
                    Log in
                </Link>
                <Link
                    to="#"
                    className="text-white bg-[#4CAF4F] hover:bg-white hover:text-[#4CAF4F] focus:ring-4 focus:ring-[#4CAF4F] font-medium rounded-md text-xs md:text-sm px-2 md:px-5 py-1 md:py-2.5 mr-2 focus:outline-none"
                >
                    Sign up
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Navbar;
