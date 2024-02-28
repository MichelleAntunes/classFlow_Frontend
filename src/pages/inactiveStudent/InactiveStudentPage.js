import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const InactiveStudentPage = () => {
  useProtectedPage();
  return <div>InactiveStudent</div>;
};

export default InactiveStudentPage;
