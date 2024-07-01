import React from 'react'
// import Logo from '../../assets/Logo.svg'
import Icon from '../../assets/Icon.svg'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-white w-full items-center flex top-0 left-0 right-0 justify-between'>
      <div className='flex space-x-2 items-center'>
        {/* <img src={Logo} alt="Logo" /> */}
        <img className="h-6 w-9" src={Icon} alt="Icon" />
        <div className='text-2xl font-bold'>Nexcent</div>
      </div>
      <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                    <NavLink
                        to="/"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                                
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                        >
                            Service
                        </NavLink>
                                
                </li>
                <li>
                    <NavLink
                        to="/contact-us"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                    >
                        Feature
                    </NavLink>
                                
                </li>
                <li>
                    <NavLink
                        to="/github"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                    >
                        Product
                    </NavLink>
                                
                </li>
                <li>
                    <NavLink
                        to="/github"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                    >
                        Testimonial
                    </NavLink>
                                
                </li>
                <li>
                    <NavLink
                        to="/github"
                        className={({isActive}) =>
                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-[#4CAF4F]" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#4CAF4F] lg:p-0`
                        }
                    >
                        FAQ
                    </NavLink>
                                
                </li>
                            
                            
            </ul>
        </div>
        <div className="flex items-center lg:order-2">
            <Link
                to="#"
                className="text-[#4CAF4F] hover:bg-[#F5F7FA] focus:ring-4 focus:ring-[#F5F7FA] font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
                Log in
            </Link>
            <Link
                to="#"
                className="text-white bg-[#4CAF4F] hover:bg-white hover:text-[#4CAF4F] focus:ring-4 focus:ring-[#4CAF4F] font-medium rounded-md text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
                Sign up
            </Link>
        </div>
    </div>
  )
}

export default Navbar
