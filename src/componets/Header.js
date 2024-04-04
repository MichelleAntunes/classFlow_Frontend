// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import LoginPage from "../pages/modal/login/LoginPage";
// import SignupPage from "../pages/modal/signup/SignupPage";
// import { deleteStorageItem } from "../utils/storageManager";
// import { goToHome } from "../routes/cordinator";
// import { RxArrowLeft, RxHamburgerMenu } from "react-icons/rx";

// export const Header = () => {
//   const location = useLocation();
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

//   const logout = () => {
//     deleteStorageItem("token");
//     goToHome();
//   };

//   const handleLoginClick = () => setIsLoginModalOpen(true);
//   const handleSignupClick = () => setIsSignupModalOpen(true);
//   const closeModal = () => {
//     setIsLoginModalOpen(false);
//     setIsSignupModalOpen(false);
//   };

//   const ButtonSelector = () => {
//     switch (location.pathname) {
//       case "/":
//         return (
//           <>
//             <button
//               onClick={handleLoginClick}
//               className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//             >
//               Login
//             </button>
//             <button
//               onClick={handleSignupClick}
//               className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//             >
//               Signup
//             </button>{" "}
//           </>
//         );
//       case "/feed":
//         return (
//           <>
//             <button
//               onClick={logout}
//               className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//             >
//               Logout
//             </button>{" "}
//             <Link
//               className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
//               to="/burguer"
//             >
//               <RxHamburgerMenu className="w-6 h-8" />
//             </Link>
//           </>
//         );
//       case "/aboutUs":
//       case "/contactUs":
//         return (
//           <>
//             {" "}
//             <button
//               onClick={logout}
//               className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//             >
//               Logout
//             </button>{" "}
//             <Link
//               className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
//               to="/burguer"
//             >
//               <RxHamburgerMenu className="w-6 h-8" />
//             </Link>
//             {location.pathname === "/aboutUs" && (
//               <Link
//                 className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
//                 to="/feed"
//               >
//                 <RxArrowLeft className="w-6 h-8" />
//               </Link>
//             )}
//             {location.pathname === "/contactUs" && (
//               <Link
//                 className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
//                 to="/feed"
//               >
//                 <RxArrowLeft className="w-6 h-8" />
//               </Link>
//             )}
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="fixed top-0 left-0 right-0 z-10 bg-gray-50 font-header">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link
//           to="/"
//           className="text-2xl m-8 p-2 hover:shadow-md rounded-lg transition duration-300 ease-in-out"
//         >
//           CLASSFLOW
//         </Link>
//         <div className="flex items-center gap-5">
//           <Link
//             to="/aboutUs"
//             className={`m-2 p-2 text-sm ${
//               location.pathname === "/aboutUs" ? "border-b-2 border-black" : ""
//             } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//           >
//             About Us
//           </Link>
//           <Link
//             to="/contactUs"
//             className={`m-2 p-2 text-sm ${
//               location.pathname === "/contactUs"
//                 ? "border-b-2 border-black"
//                 : ""
//             } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
//           >
//             Contact Us
//           </Link>
//         </div>
//         <div className="flex mr-16 gap-4 p-2 text-sm">{ButtonSelector()}</div>
//       </div>
//       {(isLoginModalOpen || isSignupModalOpen) && (
//         <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white p-8 rounded-lg">
//             {isLoginModalOpen && <LoginPage onClose={closeModal} />}
//             {isSignupModalOpen && <SignupPage onClose={closeModal} />}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LoginPage from "../pages/modal/login/LoginPage";
import SignupPage from "../pages/modal/signup/SignupPage";
import { deleteStorageItem } from "../utils/storageManager";
import { goToHome } from "../routes/cordinator";
import { RxArrowLeft, RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const logout = () => {
    deleteStorageItem("token");
    goToHome();
  };

  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleSignupClick = () => setIsSignupModalOpen(true);
  const closeModal = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
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
          {isLoggedIn && location.pathname === "/" && (
            <Link
              to="/feed"
              className={`m-2 p-2 text-sm ${
                location.pathname === "/feed" ? "border-b-2 border-black" : ""
              } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
            >
              Feed
            </Link>
          )}
        </div>
        <div className="flex mr-16 gap-4 p-2 text-sm">
          {isLoggedIn ? (
            <>
              <button
                onClick={logout}
                className={`m-2 p-2 text-sm hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
              >
                Logout
              </button>
              <Link
                className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
                to="/burguer"
              >
                <RxHamburgerMenu className="w-6 h-8" />
              </Link>
              {location.pathname !== "/" && (
                <Link
                  className={`m-2 p-2 text-sm  rounded-lg transition duration-300 ease-in-out`}
                  to="/feed"
                >
                  <RxArrowLeft className="w-6 h-8" />
                </Link>
              )}
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
              </button>{" "}
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
    </div>
  );
};

export default Header;
