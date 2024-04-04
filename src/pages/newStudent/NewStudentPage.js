import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";

const NewStudent = () => {
  useProtectedPage();
  return (
    <div className="m-10 p-10 ">Page to add a new student. In progress</div>
  );
};

export default NewStudent;
