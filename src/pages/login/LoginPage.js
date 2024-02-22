import React from "react";
import { emailPattern, passwordPattern } from "../../constants/patterns";
import { AiOutlineClose } from "react-icons/ai";

const LoginPage = ({ onClose }) => {
  const login = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 font-raleway">
            ClassFlow
          </h1>
          <button
            onClick={onClose}
            className=" text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <AiOutlineClose />
          </button>
        </div>
        <form onSubmit={login} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-4 py-2"
            pattern={emailPattern}
            title="Enter a valid email address"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-gray-300 px-4 py-2"
            pattern={passwordPattern}
            title="Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
