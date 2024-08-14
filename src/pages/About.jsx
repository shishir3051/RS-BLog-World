import React from 'react'

function About() {
  return (
      <div>
          <div className=" px-4 py-40 bg-black mx-auto text-center text-white">
              <h1 className=" font-primary   mb-5 text-5xl lg:text-6xl font-bold leading-snug ">
                  ABOUT
              </h1>
          </div>
          <div className="bg-gray-100 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
                      About Us
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow-md">
                      <p className="mt-4 text-gray-600">
                          Welcome to our blog! We are passionate about sharing
                          knowledge and insights on various topics, ranging from
                          technology and business to lifestyle and health. Our
                          goal is to provide valuable content that educates and
                          inspires our readers.
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                          Our Mission
                      </h3>
                      <p className="mt-4 text-gray-600">
                          Our mission is to empower individuals and businesses
                          by providing reliable information and resources. We
                          strive to create a community where people can learn,
                          grow, and succeed together.
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                          Our History
                      </h3>
                      <p className="mt-4 text-gray-600">
                          Founded in 2020, our blog started as a small project
                          with a big vision. Over the years, we have grown into
                          a trusted platform, reaching a diverse audience
                          worldwide. Our commitment to quality and integrity has
                          been the cornerstone of our journey.
                      </p>

                      <h3 className="text-2xl font-semibold text-gray-900 mt-8">
                          Our Team
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
                          <div className="text-center">
                              <img
                                  src="public/images/422241547_916812969794768_2478967623828820882_n.jpg"
                                  alt="Team Member 1"
                                  className="mx-auto w-32 h-32 rounded-full object-cover"
                              />
                              <h4 className="mt-4 text-xl font-medium text-gray-900">
                                  Md Gaziur Rahman Shishir
                              </h4>
                              <p className="text-gray-600">Editor-in-Chief</p>
                          </div>
                          <div className="text-center">
                              <img
                                  src="public/images/team-member-01.jpg"
                                  alt="Team Member 2"
                                  className="mx-auto w-32 h-32 rounded-full object-cover"
                              />
                              <h4 className="mt-4 text-xl font-medium text-gray-900">
                                  Mrs. Sarah
                              </h4>
                              <p className="text-gray-600">
                                  Content Strategist
                              </p>
                          </div>
                          <div className="text-center">
                              <img
                                  src="public/images/Team-memeber-02.png"
                                  alt="Team Member 3"
                                  className="mx-auto w-32 h-32 rounded-full object-cover"
                              />
                              <h4 className="mt-4 text-xl font-medium text-gray-900">
                                  Emily Johnson
                              </h4>
                              <p className="text-gray-600">
                                  Social Media Manager
                              </p>
                          </div>
                      </div>

                      <div className="mt-8">
                          <h3 className="text-2xl font-semibold text-gray-900">
                              Vision for the Future
                          </h3>
                          <p className="mt-4 text-gray-600">
                              Looking ahead, we aim to expand our reach and
                              continue delivering impactful content that
                              resonates with our audience. We are excited to
                              explore new topics and formats, ensuring our blog
                              remains a go-to resource for our readers.
                          </p>
                      </div>

                      <div className="mt-8">
                          <h3 className="text-2xl font-semibold text-gray-900">
                              Contact Us
                          </h3>
                          <p className="mt-4 text-gray-600">
                              Have any questions or suggestions? Feel free to
                              reach out to us at{" "}
                              <a
                                  href="mailto:gaziur35-3051@diu.edu.bd"
                                  className="text-blue-500 hover:underline"
                              >
                                  gaziur35-3051@diu.edu.bd
                              </a>
                              . We would love to hear from you!
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default About
