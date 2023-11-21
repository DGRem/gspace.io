import { Link } from "react-router-dom";
import React, { useEffect } from 'react';

export default function NavBar () {
    useEffect(() => {
        const handleToggle = () => {
            const menus = document.querySelectorAll('.navbar-menu');
            for (let i = 0; i < menus.length; i++) {
                menus[i].classList.toggle('hidden');
            }
        };

        // open
        const burgers = document.querySelectorAll('.navbar-burger');
        if (burgers.length) {
            burgers.forEach(burger => {
                burger.addEventListener('click', handleToggle);
            });
        }

        // close
        const closes = document.querySelectorAll('.navbar-close');
        const backdrops = document.querySelectorAll('.navbar-backdrop');
        if (closes.length) {
            closes.forEach(close => {
                close.addEventListener('click', handleToggle);
            });
        }

        if (backdrops.length) {
            backdrops.forEach(backdrop => {
                backdrop.addEventListener('click', handleToggle);
            });
        }

        // Cleanup on component unmount
        return () => {
            if (burgers.length) {
                burgers.forEach(burger => {
                    burger.removeEventListener('click', handleToggle);
                });
            }

            if (closes.length) {
                closes.forEach(close => {
                    close.removeEventListener('click', handleToggle);
                });
            }

            if (backdrops.length) {
                backdrops.forEach(backdrop => {
                    backdrop.removeEventListener('click', handleToggle);
                });
            }
        };
    }, []);

    return (
        <>
            <nav className="relative px-4 py-4 flex justify-between items-center bg-transparent border-b-2 border-b-slate-300">
                <a className="text-3xl font-bold leading-none" href="#">
                    {/*PENDING LOGO*/}
                    G-Space
                </a>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-blue-600 p-3">
                        <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 ">
                    <li className="text-sm text-gray-400 hover:text-gray-500"><Link to="/">Home</Link></li>
                    <li className="text-sm text-gray-400 hover:text-gray-500"><Link to="/booking">Book Now</Link></li>
                    <li className="text-sm text-gray-400 hover:text-gray-500"><Link to="/gallery">Gallery</Link></li>
                    <li className="text-sm text-gray-400 hover:text-gray-500"><Link to="/reviews">Reviews</Link></li>
                    <li className="text-sm text-gray-400 hover:text-gray-500"><a href="Footer">Contact Us</a></li>
                    <li className="text-sm text-gray-400 hover:text-gray-500"><Link to="/faq">FAQ</Link></li>
                </ul>
                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Log In</a>
                <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Register</a>
            </nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gradient-to-br from-violet-800 to-teal-400 border-r overflow-y-auto">
                    <div className="flex items-center mb-8">
                        <a className="mr-auto text-3xl font-bold leading-none" href="#">
                            G-Space
                        </a>
                        <button className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <Link to="/booking">Book Now</Link>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <Link to="/reviews">Reviews</Link>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <a href="Footer">Contact Us</a>
                            </li>
                            <li className="mb-1 block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded">
                                <Link to="/faq">FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded" href="#">Sign in</a>
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded" href="#">Sign Up</a>
                        </div>
                        <p className="my-4 text-xs text-center text-white">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </>
    )
}