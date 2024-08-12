import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//react icons
import { FaBars, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { ImCross } from "react-icons/im";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    //navItems
    const naveItems = [
        {
            path: "/",
            link: "Home",
        },
        {
            path: "/services",
            link: "Services",
        },
        {
            path: "/about",
            link: "About",
        },
        {
            path: "/blogs",
            link: "Blogs",
        },
        {
            path: "/contact",
            link: "Contact",
        },
    ];
    return (
        <header className=" bg-gray-600 shadow shadow-white text-white fixed top-0 left-0 right-0">
            <nav className=" px-10  py-4 max-w-full mx-auto flex  justify-between items-center ">
                <a className=" text-xl font-bold text-white" href="/">
                    RS-<span className=" text-orange-400">B</span>log{" "}
                    <span className=" text-orange-400">
                        <i>World</i>
                    </span>
                </a>

                {/* naveItems for ig devices */}
                <ul className=" md:flex gap-12 text-lg hidden transition duration-500 ">
                    {naveItems.map(({ path, link }) => (
                        <li className="text-white" key={path}>
                            {" "}
                            <NavLink
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                        ? "pending"
                                        : ""
                                }
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* menu icons */}
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className=" hover:text-orange-500">
                        <FaFacebook />
                    </a>
                    <a href="/" className=" hover:text-orange-500">
                        <FaGithub />
                    </a>
                    <a href="/" className=" hover:text-orange-500">
                        <FaTwitter />
                    </a>

                    <button className=" bg-red-500 px-6 py-2 font-medium text-center rounded hover:bg-white hover:text-red-500 transition-all duration-300 ease-in ">
                        Log in
                    </button>
                </div>
                <div className="md:hidden">
                    {/* mobile menu btn */}
                    <button onClick={toggleMenu} className=" cursor-pointer">
                        {isMenuOpen ? (
                            <ImCross className="w-5 h-5" />
                        ) : (
                            <FaBars className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </nav>
            <div>
                <ul
                    className={` md:hidden gap-12 bg-gray-500 text-lg block space-y-4 px-8 py-6 mt-14  ${
                        isMenuOpen
                            ? "fixed  top-0 left-0 w-full transition-all duration-200 ease-out"
                            : "hidden"
                    }  `}
                >
                    {naveItems.map(({ path, link }) => (
                        <li className="text-white" key={path}>
                            {" "}
                            <NavLink onClick={toggleMenu} to={path}>
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
