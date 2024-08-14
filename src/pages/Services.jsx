import React, { useState } from "react";
import ServiceModal from "../component/ServiceModal";


function Services() {
    const services = [
        {
            title: "Web Development",
            description:
                "We build responsive and performant websites using modern technologies.",
            detailedDescription:
                "Our web development service includes creating custom websites and web applications using technologies such as React, Angular, Vue, and Node.js. We ensure that your website is not only visually appealing but also optimized for performance and scalability.",
            icon: "🌐",
        },
        {
            title: "SEO Optimization",
            description:
                "Improve your site ranking and get more traffic with our SEO services.",
            detailedDescription:
                "Our SEO services involve optimizing your website to rank higher on search engines like Google. We use techniques such as keyword research, on-page optimization, and link building to improve your visibility and drive more traffic to your site.",
            icon: "🔍",
        },
        {
            title: "Content Creation",
            description:
                "Engage your audience with high-quality content tailored to your needs.",
            detailedDescription:
                "We offer content creation services to help you engage your audience with compelling and informative content. Whether you need blog posts, articles, or social media content, our team of writers can deliver high-quality content that aligns with your brand voice.",
            icon: "✍️",
        },
        {
            title: "Social Media Management",
            description:
                "Grow your brand presence with our expert social media strategies.",
            detailedDescription:
                "Our social media management services help you grow your brand presence on platforms like Facebook, Instagram, and Twitter. We create and manage social media campaigns, engaging content, and analytics to help you connect with your audience and achieve your business goals.",
            icon: "📱",
        },
        {
            title: "Graphic Design",
            description:
                "Create stunning visuals for your brand with our graphic design services.",
            detailedDescription:
                "Our graphic design services include creating stunning visuals for your brand, such as logos, brochures, and marketing materials. Our team of designers will work with you to create designs that reflect your brand identity and captivate your audience.",
            icon: "🎨",
        },
        {
            title: "Email Marketing",
            description:
                "Reach and engage your audience with targeted email campaigns.",
            detailedDescription:
                "Our email marketing services help you reach and engage your audience with targeted email campaigns. We create and send newsletters, promotional emails, and automated sequences to keep your audience informed and engaged.",
            icon: "📧",
        },
        {
            title: "Digital Marketing Strategy",
            description:
                "Develop a comprehensive digital marketing strategy to achieve your goals.",
            detailedDescription:
                "Our digital marketing strategy services help you develop a comprehensive plan to achieve your business goals. We analyze your target audience, competitors, and market trends to create a strategy that maximizes your online presence and drives results.",
            icon: "💡",
        },
        {
            title: "E-commerce Solutions",
            description:
                "Enhance your online store with custom e-commerce solutions.",
            detailedDescription:
                "Our e-commerce solutions include creating custom online stores and shopping experiences for your customers. We integrate features such as payment gateways, inventory management, and order tracking to ensure a seamless shopping experience.",
            icon: "🛒",
        },
        {
            title: "Analytics and Reporting",
            description:
                "Get insights into your performance with detailed analytics and reporting.",
            detailedDescription:
                "Our analytics and reporting services provide you with detailed insights into your website and marketing performance. We use tools like Google Analytics and custom reporting to track your KPIs and make data-driven decisions.",
            icon: "📊",
        },
    ];
    const [selectedService, setSelectedService] = useState(null)
    

    const handleOpenModal = (service) => {
        setSelectedService(service);
    };

    const handleCloseModal = () => {
        setSelectedService(null);
    };
    return (
        <div>
            <div className=" px-4 py-40 bg-black mx-auto text-center text-white">
                <h1 className=" font-primary   mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                    SERVICES
                </h1>
            </div>
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                        Our Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                                onClick={() => handleOpenModal(service)}
                            >
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                                    {service.title}
                                </h3>
                                <p className="mt-2 text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <ServiceModal
                    isOpen={!!selectedService}
                    onClose={handleCloseModal}
                    title={selectedService?.title}
                    description={selectedService?.detailedDescription}
                />
            </section>
        </div>
    );
}

export default Services;
