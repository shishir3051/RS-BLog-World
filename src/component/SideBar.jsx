import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SideBar() {
    const [popularBlogs, setPopularBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then((res) => res.json())
            .then((data) => setPopularBlogs(data.slice(0, 15)));
    }, []);
    return (
        <div>
            <div>
                <h3 className=" text-2xl font-semibold px-4">Latest BLogs</h3>
                <div>
                    {popularBlogs.slice(0, 5).map((blog) => (
                        <div
                            key={blog.id}
                            className=" my-5 border-b-2 border-spacing-2 px-4"
                        >
                            <h4 className=" font-medium mb-2">{blog.title}</h4>
                            <Link
                                to="/"
                                className=" pb-2  text-base hover:text-orange-500 transition duration-100"
                            >
                                Read Now ➡️{" "}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            {/* popular blogs */}
            <div  >
                <h3 className=" text-2xl font-semibold px-4 mt-20">Popular BLogs</h3>
                <div>
                    {popularBlogs.slice(6, 10).map((blog) => (
                        <div
                            key={blog.id}
                            className=" my-5 border-b-2 border-spacing-2 px-4"
                        >
                            <h4 className=" font-medium mb-2">{blog.title}</h4>
                            <Link
                                to="/"
                                className=" pb-2  text-base hover:text-orange-500 transition duration-100"
                            >
                                Read Now ➡️{" "}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
