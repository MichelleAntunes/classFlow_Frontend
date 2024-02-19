import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="flex justify-between font-header border-4 border-blue-500 ">
      <div className="flex border-4 border-green-500 gap-5">
        <Link to="/" className="border-4 border-pink-500 m-2 p-2  ">
          CLASSFLOW
        </Link>
        <Link to="/aboutUs" className="border-4 border-red-500 m-2 p-2">
          About Us
        </Link>
      </div>
      <div className="flex border-4 border-yellow-500  gap-4">
        <Link to="/login" className="border-4 border-red-500 m-2 p-2">
          Login
        </Link>
        <Link to="/signup" className="border-4 border-red-500 m-2 p-2">
          Signup
        </Link>
      </div>
    </div>
  );
};
