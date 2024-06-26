import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../../constants/baseURL";
import { useNavigate } from "react-router-dom";
import { setStorageItem } from "../../../utils/storageManager";
import { goToFeed } from "../../../routes/cordinator";

const SignupPage = ({ onClose }) => {
  const navigate = useNavigate();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {};

    if (form.name.trim().length < 3) {
      errors.name = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = "Email inválido";
    }

    if (
      !form.password.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()[\]{}\-_+=]).{8,}$/
      )
    ) {
      errors.password = "Senha inválida";
    }

    return errors;
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}/teachers/signup`, form)
      .then((res) => {
        setStorageItem("token", res.data.token);
        goToFeed(navigate);
        onClose();
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data.message || "Erro inesperado, tente novamente.");
      });

    const errors = validateForm();

    if (Object.keys(errors).length === 0) {
      console.log("Formulário válido. ");
      console.log(form);
    } else {
      console.log("Formulário inválido:", errors);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-8 w-96">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 font-raleway">
            Signup
          </h1>
          <button
            onClick={onClose}
            className=" text-2xl text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <AiOutlineClose />
          </button>
        </div>
        <form onSubmit={signup} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="rounded-lg border border-gray-300 px-4 py-2"
            title="Invalid name."
            required
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-gray-300 px-4 py-2"
            title="Enter a valid email address"
            required
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-gray-300 px-4 py-2"
            title="Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character."
            required
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
