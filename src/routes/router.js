import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import ErrorPage from "../pages/error/ErrorPage";
import FeedPage from "../pages/feed/FeedPage";
import InactiveStudentPage from "../pages/inactiveStudent/InactiveStudentPage";
import NewStudentPage from "../pages/newStudent/NewStudentPage";
import StudentPage from "../pages/student/studentPage";
import { Header } from "../componets/Header";
import Footer from "../componets/Footer";
import ContactUsPage from "../pages/contactUs/ContactUsPage";
import LoginPage from "../pages/modal/login/LoginPage";
import SignupPage from "../pages/modal/signup/SignupPage";
import BurguerPageModal from "../pages/modal/burguer/BurguerPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/inactiveStudent" element={<InactiveStudentPage />} />
        <Route path="/newStudent" element={<NewStudentPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
        <Route path="/burguer" element={<BurguerPageModal />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
