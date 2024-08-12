import React from "react";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div className=" px-4 py-32 bg-black mx-auto">
            <div className=" text-white text-center">
                <h1 className=" font-primary mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                    Welcome To Our RS-BLOG WORLD
                </h1>
                <p className="text-gray-200 lg:w-3/5 mx-auto  font-primary">
                    Start your blog today and join a community of writers and
                    readers who are passionate about sharing their stories and
                    ideas. Share your story with the world. Create a beautiful,
                    personalized blog that fits your brand.
                </p>
                <div className="p-5 ">
                    <Link
                        to="/"
                        className="  font-medium hover:text-orange-500 transition duration-100"
                    >
                        Learn more ➡️{" "}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Banner;
