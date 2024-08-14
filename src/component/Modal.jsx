import React, { useState } from "react";
import { Link } from "react-router-dom";

function Modal({ isOpen, isClose }) {
      const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-up and login
      const [formData, setFormData] = useState({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
      });

      const [errorMessage, setErrorMessage] = useState("");
      const [successMessage, setSuccessMessage] = useState("");

      const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
              ...formData,
              [name]: value,
          });
      };

      const handleSignUpSubmit = (e) => {
          e.preventDefault();
          if (formData.password !== formData.confirmPassword) {
              setErrorMessage("Passwords do not match");
              return;
          }

          // Store user data in localStorage
          localStorage.setItem(
              "user",
              JSON.stringify({
                  email: formData.email,
                  password: formData.password,
              })
          );

          setSuccessMessage("Account created successfully!");
          setErrorMessage("");
      };

      const handleLoginSubmit = (e) => {
          e.preventDefault();
          const storedUser = JSON.parse(localStorage.getItem("user"));

          if (
              storedUser &&
              storedUser.email === formData.email &&
              storedUser.password === formData.password
          ) {
              alert("Login successful!");
              setErrorMessage("");
          } else {
              setErrorMessage("Invalid email or password");
          }
      };

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
                isOpen ? "" : "hidden"
            }`}
        >
            <div className="modal-container">
                <div className="bg-red-600 text-center p-5 h-fit lg:w-[500px] rounded shadow-md">
                    <h2 className="text-xl font-semibold mb-5 mt-6 uppercase">
                        {isSignUp ? "Sign Up Here!" : "Please Login Here!"}
                    </h2>
                    {errorMessage && (
                        <p className="text-red-500 mb-4">{errorMessage}</p>
                    )}
                    {successMessage && (
                        <p className="text-green-500 mb-4">{successMessage}</p>
                    )}

                    <form
                        onSubmit={
                            isSignUp ? handleSignUpSubmit : handleLoginSubmit
                        }
                        className="px-4"
                    >
                        {isSignUp && (
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        )}
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                placeholder="example@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className=" w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 font-medium text-base text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                            />
                        </div>
                        <div className="py-5">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-2 font-medium text-base text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md"
                            />
                        </div>
                        {isSignUp && (
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        )}
                        <button
                            type="submit"
                            className="hover:shadow-md rounded-md bg-green-700 text-white hover:bg-orange-600 px-8 py-3 font-semibold outline-none text-base transition duration-300"
                        >
                            {isSignUp ? "Sign Up" : "Log in"}
                        </button>
                    </form>
                    <button
                        onClick={isClose}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-8 inline-flex items-center hover:shadow-md mt-5 rounded-md"
                    >
                        Close
                    </button>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-gray-600">
                            {isSignUp
                                ? "Already have an account?"
                                : "Don't have an account?"}{" "}
                            <button
                                onClick={() => setIsSignUp(!isSignUp)}
                                className="text-blue-500 hover:underline"
                            >
                                {isSignUp ? "Login" : "Sign up"}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
