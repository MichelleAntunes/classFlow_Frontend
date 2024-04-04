import React from "react";
import { FaGithubAlt, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const ContactUsPage = () => {
  return (
    <div className="container mx-auto mt-8 px-4 p-10 md:px-8">
      <h1 className="text-3xl font-bold mb-4 m-10">Contact Us</h1>
      <p className="text-lg mb-4 p-10 m-10">
        Thank you for your interest in ClassFlow! Our platform is dedicated to
        providing educational resources. If you're interested in accessing our
        code, you can find it on GitHub. For any inquiries, please feel free to
        reach out to us via LinkedIn, WhatsApp, or Email.
      </p>
      <div className="flex justify-center p-10 m-20 mb-20">
        <div className="flex flex-wrap gap-4 md:gap-10">
          <a
            href="https://github.com/MichelleAntunes/classFlow_Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            <FaGithubAlt className="mr-2" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michelle-antunes-868b24156"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            <FaLinkedin className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://wa.me/4917641652837"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            <FaWhatsapp className="mr-2" />
            WhatsApp
          </a>
          <a
            href="mailto:miichelleantunes@outlook.com"
            className="flex items-center bg-gray-200 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-300 transition duration-300"
          >
            <MdOutlineMail className="mr-2" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
