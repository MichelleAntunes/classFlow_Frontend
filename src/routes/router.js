import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import AboutUsPage from "../pages/aboutUs/AboutUsPage";
import ErrorPage from "../pages/error/ErrorPage";
import FeedPage from "../pages/feed/FeedPage";
import InactiveStudentPage from "../pages/inactiveStudent/InactiveStudentPage";
import NewStudentPage from "../pages/newStudent/NewStudentPage";
import SignupPage from "../pages/signup/SignupPage";
import StudentPage from "../pages/student/studentPage";
import { Header } from "../componets/Header";
import Footer from "../componets/Footer";

export const Router = () => {
  console.log("Router being rendered");

  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/inactiveStudent" element={<InactiveStudentPage />} />
        <Route path="/newStudent" element={<NewStudentPage />} />
        <Route path="/student/:id" element={<StudentPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
