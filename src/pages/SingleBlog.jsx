import React from "react";
import { useLoaderData } from "react-router-dom";

import { FaClock, FaUser } from "react-icons/fa6";
import SideBar from "../component/SideBar";

function SingleBlog() {
    const data = useLoaderData();

    const {
        title,
        image,
        category,
        author,
        published_date,
        reading_time,
        content,
    } = data[0];
    return (
        <div>
            <div>
                <div className=" px-4 py-40 bg-black mx-auto text-center text-white">
                    <h1 className=" font-primary   mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                        Single Blog
                    </h1>
                </div>

                {/* blog details */}
                <div className="max-w-7xl mx-auto px-5 lg:px-0  my-12 flex   flex-col md:flex-row gap-9">
                    <div className="lg:w-3/4 mx-auto ">
                        <div>
                            <img
                                src={image}
                                alt=""
                                className="w-full mx-auto rounded"
                            />
                        </div>
                        <h2 className=" text-3xl mt-8 font-bold mb-4 text-blue-950 ">
                            {title}
                        </h2>
                        <p
                            className=" mb-3 text-gray-600
            "
                        >
                            {" "}
                            <FaUser className="inline-flex items-center mr-2" />{" "}
                            {author} | {published_date}
                        </p>
                        <p
                            className=" mb-3 text-gray-600
            "
                        >
                            <FaClock className="inline-flex items-center mr-2" />{" "}
                            {reading_time}
                        </p>
                        <p className=" text-sm text-gray-500">{content}</p>

                        <div className=" text-sm text-gray-500 text-justify">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repellendus impedit
                                dolorem laboriosam voluptates possimus delectus
                                provident, tempore numquam quod commodi nostrum.
                                Delectus aspernatur veritatis, libero eius
                                quidem sequi animi?
                            </p>{" "}
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repellendus impedit
                                dolorem laboriosam voluptates possimus delectus
                                provident, tempore numquam quod commodi nostrum.
                                Delectus aspernatur veritatis, libero eius
                                quidem sequi animi?
                            </p>{" "}
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repellendus impedit
                                dolorem laboriosam voluptates possimus delectus
                                provident, tempore numquam quod commodi nostrum.
                                Delectus aspernatur veritatis, libero eius
                                quidem sequi animi?
                            </p>{" "}
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repellendus impedit
                                dolorem laboriosam voluptates possimus delectus
                                provident, tempore numquam quod commodi nostrum.
                                Delectus aspernatur veritatis, libero eius
                                quidem sequi animi?
                            </p>{" "}
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ipsam repellendus impedit
                                dolorem laboriosam voluptates possimus delectus
                                provident, tempore numquam quod commodi nostrum.
                                Delectus aspernatur veritatis, libero eius
                                quidem sequi animi?
                            </p>{" "}
                            <br />
                        </div>
                    </div>
                    <div className=" border-l  border-gray-300"></div>
                    <div className="lg:w1/2   ">
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleBlog;
