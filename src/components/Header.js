'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from "@/images/indeedlogo.png"
import { navlinks } from './data/Navlinks'
import Link from 'next/link'
import { slugify } from './helpers/slugify'
import { Bell, BookmarkCheck, CircleHelp, Mail, Settings, Star, UserIcon, UserRoundPen } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBookBookmark, faBookmark, faCoffee, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import { getLoggedInStatus } from './helpers/getLoggedinStatus'
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = getLoggedInStatus();
        setIsLoggedIn(loggedInStatus);
    }, []); 

   const  handleLogin = ()=>{
    setIsLoggedIn(!isLoggedIn)
    localStorage.setItem("loggedin",!getLoggedInStatus())
    window.location.reload()
   }
    return (


        <nav className="bg-white relative  w-full border-b z-50 border-gray-200 dark:bg-gray-900">
            <div className="w-full h-full  px-7 flex flex-wrap items-center  mx-auto ">
                <a href="/" className="flex items-center space-x-3 ">
                    <Image
                        alt='indeed logo'
                        src={logo}
                        height={110}
                        width={110}
                    />
                </a>

                <div className="flex items-center  mt-2 h-16 space-x-3 md:space-x-6 ml-auto md:order-2  ">

                    <button type="button" className="flex group text-sm h-full md:hover:bg-[#eef1fe] px-3 items-center border-b-2 border-transparent md:hover:border-[#3662ab]" id="user-menu-button"  >
                        <FontAwesomeIcon className='group-hover:text-[#164081]' style={{ height: '23px', width: "23px" }} icon={faEnvelope} />

                    </button>
                    <button type="button" className="flex group text-sm h-full md:hover:bg-[#eef1fe] px-3 items-center border-b-2 border-transparent md:hover:border-[#3662ab]" id="user-menu-button"  >
                        <FontAwesomeIcon className='group-hover:text-[#164081]' style={{ height: '23px', width: "23px" }} icon={faBell} />
                    </button>

                    <div className="dropdown relative dropdown-end cursor-pointer flex justify-center h-full md:hover:bg-[#eef1fe]  items-center group border-b-2 border-transparent md:hover:border-[#3662ab]">
                        <div tabIndex={0} role="button" className=' h-full w-full flex justify-center items-center px-3'>
                            <FontAwesomeIcon className='group-hover:text-[#164081]' style={{ height: '23px', width: "23px" }} icon={faUser} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content text-slate-800/95 menu border-[2px] border-slate-200/50 bg-slate-50 shadow-lg rounded-md z-[1] w-fit p-0  absolute top-full mt-2">
                            <li className=' w-full'><a className='p-4 px-7 text-[1.1em] font-semibold hover:bg-transparent pt-5 pb-5 border-b bg-[#eef1fe] text-slate-900'>abdelghanidari.main@gmail.com</a></li>
                            <li className=' w-full'><a className='p-4 px-7 text-[1.1em] font-[400]'><UserRoundPen /> Profile</a></li>
                            <li className=' w-full'><a className='p-4 px-7 text-[1.1em] font-[400]'> <BookmarkCheck /> My jobs</a></li>
                            <li className=' w-full'><a className='p-4 px-7 text-[1.1em] font-[400]'> <Star /> Reviews</a></li>
                            <li><Link href={"/settings"} className='p-4 px-7 text-[1.1em] font-[400]'><Settings /> Settings</Link></li>
                            <li className=' w-full'><a className='p-4 px-7 text-[1.1em] font-[400]'><CircleHelp /> Help center</a></li>
                            <li ><a onClick={handleLogin} className='p-4 px-7 text-[1.1em] font-semibold border-t-[1px] flex justify-center text-[#164081]'>{isLoggedIn?"Sign Out":"Log In"}</a></li>
                        </ul>
                    </div>

                    <Link href={"/employers-posts"} className='text-slate-700 font-[400] text-sm border-l-2 border-slate-300 pl-7 '>Employers / Post Job</Link>
                    {/* <!-- Dropdown menu --> */}
                    <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                {/* hidden menu */}
                <div className="items-center justify-between hidden w-full h-fit  md:flex md:w-auto md:order-1 md:ms-12 md:mt-2 " id="navbar-user">
                    <ul className="flex flex-col  font-medium  h-16 mt-4 border border-gray-100 rounded-lg    md:flex-row md:mt-0 md:border-0   dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        {navlinks.map((link) => <li key={link} className=" h-full">
                            <Link className=' py-2 px-3 text-slate-700 font-[400]  md:hover:bg-transparent  md:hover:border-b-2 md:px-4  dark:text-white md:dark:hover:text-blue-500 border-b-2 border-transparent md:hover:border-[#3662ab] text-sm   flex items-center pt-4   h-full' href={`/${slugify(link)}`} >{link}</Link>
                        </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Header