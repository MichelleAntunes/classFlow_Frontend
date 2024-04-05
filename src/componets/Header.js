import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginPage from "../pages/modal/login/LoginPage";
import SignupPage from "../pages/modal/signup/SignupPage";
import { deleteStorageItem } from "../utils/storageManager";
import { goToHome } from "../routes/cordinator";
import { RxArrowLeft, RxHamburgerMenu } from "react-icons/rx";
import BurguerPageModal from "../pages/modal/burguer/BurguerPage";
import { MdClose } from "react-icons/md";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isBurguerModalOpen, setIsBurguerModalOpen] = useState(false);

  const logout = () => {
    deleteStorageItem("token");
    goToHome(navigate);
  };

  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleSignupClick = () => setIsSignupModalOpen(true);
  const handleBurguerClick = () => setIsBurguerModalOpen(!isBurguerModalOpen); // Toggle the modal
  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    setIsBurguerModalOpen(false);
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-gray-50 font-header">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl m-8 p-2 hover:shadow-md rounded-lg transition duration-300 ease-in-out"
        >
          CLASSFLOW
        </Link>
        <div className="flex items-center gap-5">
          <Link
            to="/aboutUs"
            className={`m-2 p-2 text-sm ${
              location.pathname === "/aboutUs" ? "border-b-2 border-black" : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            About Us
          </Link>
          <Link
            to="/contactUs"
            className={`m-2 p-2 text-sm ${
              location.pathname === "/contactUs"
                ? "border-b-2 border-black"
                : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            Contact Us
          </Link>
          {location.pathname === "/inactiveStudent" && (
            <Link to="/feed" className="m-2 p-2 text-sm">
              Active Students
            </Link>
          )}
          {location.pathname === "/feed" && (
            <Link to="/inactiveStudent" className="m-2 p-2 text-sm">
              Inactive Students
            </Link>
          )}
        </div>
        <div className="flex mr-10 gap-4 p-2 text-sm items-center">
          {isLoggedIn ? (
            <>
              <button
                onClick={logout}
                className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
              >
                Logout
              </button>
              {location.pathname !== "/feed" && (
                <Link
                  className={`m-2 p-2 text-sm rounded-lg transition duration-300 ease-in-out`}
                  to="/feed"
                >
                  Feed
                </Link>
              )}
              <div
                className={`m-2 p-2 text-sm rounded-lg transition duration-300 ease-in-out cursor-pointer`}
                onClick={handleBurguerClick}
              >
                <RxHamburgerMenu className="w-6 h-8" />
              </div>
            </>
          ) : (
            <>
              <button
                onClick={handleLoginClick}
                className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
              >
                Login
              </button>
              <button
                onClick={handleSignupClick}
                className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
      {(isLoginModalOpen || isSignupModalOpen) && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            {isLoginModalOpen && <LoginPage onClose={closeModal} />}
            {isSignupModalOpen && <SignupPage onClose={closeModal} />}
          </div>
        </div>
      )}
      {isBurguerModalOpen && (
        <div className="fixed top-8 right-8 z-20">
          <div className="bg-white p-8 rounded-lg">
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <MdClose className="text-gray-600 w-6 h-6" />
              </button>
            </div>
            <BurguerPageModal onClose={closeModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
