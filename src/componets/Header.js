import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

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
          <Link
            to="/login"
            className={`m-2 p-2 text-sm ${
              location.pathname === "/login" ? "border-b-2 border-black" : ""
            } hover:shadow-lg rounded-lg transition duration-300 ease-in-out`}
          >
            Login
          </Link>
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
    </div>
  );
};

export default Header;
