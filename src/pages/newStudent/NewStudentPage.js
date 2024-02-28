import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const NewStudent = () => {
  useProtectedPage();
  return <div>NewStudent</div>;
};

export default NewStudent;
