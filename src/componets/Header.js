import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";

export const Header = () => {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-50 font-header">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-5">
          <Link
            to="/"
            className={`text-2xl m-8 p-2 hover:shadow-md rounded-lg transition duration-300 ease-in-out`}
          >
            CLASSFLOW
          </Link>
          <Link
            to="/aboutUs"
            className={`m-2 p-2 text-sm ${
              location.pathname === "/aboutUs" ? "border-b-2 border-black" : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            About Us
          </Link>
          <Link
            to=""
            className={`m-2 p-2 text-sm ${
              location.pathname === "/contactUs"
                ? "border-b-2 border-black"
                : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            Contact Us
          </Link>
        </div>
        <div className="flex mr-16 gap-4 p-2 text-sm">
          <button
            onClick={handleLoginClick}
            className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            Login
          </button>
          <Link
            to="/signup"
            className={`m-2 p-2 text-sm ${
              location.pathname === "/signup" ? "border-b-2 border-black" : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            Signup
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <LoginPage onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
