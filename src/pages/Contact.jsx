import React, { useState } from "react";


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <div>
            <div className=" px-4 py-40 bg-black mx-auto text-center text-white">
                <h1 className=" font-primary   mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                    CONTACT
                </h1>
            </div>
            <div className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                        Contact Us
                    </h2>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm   focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="subject"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div className="mt-6">
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                            <div className="mt-6 text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Get in Touch
                            </h3>
                            <p className="mt-4 text-gray-600">
                                You can also reach us at{" "}
                                <a
                                    href="mailto:gaziur35-3051@diu.edu.bd"
                                    className="text-blue-500 hover:underline"
                                >
                                    gaziur35-3051@diu.edu.bd
                                </a>{" "}
                                or follow us on our social media channels for
                                the latest updates.
                            </p>
                            <div className="mt-4">
                                <a
                                    href="https://www.facebook.com"
                                    className="text-blue-500 hover:underline mr-4"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    className="text-blue-500 hover:underline mr-4"
                                >
                                    Twitter
                                </a>
                                <a
                                    href="https://www.instagram.com"
                                    className="text-blue-500 hover:underline"
                                >
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
