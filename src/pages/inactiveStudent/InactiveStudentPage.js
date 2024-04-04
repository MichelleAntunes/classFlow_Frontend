import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseURL";
import { Link, useNavigate } from "react-router-dom";
import { goToStudent } from "../../routes/cordinator";

const InactiveStudentPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const navigate = useNavigate();
  const inactivStudentsData = useRequestData(`${BASE_URL}/inactiveStudent`, []);
  useProtectedPage();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };
  const nameTeacher =
    inactivStudentsData &&
    inactivStudentsData.length &&
    inactivStudentsData[0].teacherId.name;

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50 gap-10 pt-10">
      <div className="mt-8 mb-4 text-center text-5xl font-bold font-raleway">
        Welcome {nameTeacher}!
      </div>
      <div className="flex m-20  justify-center mb-20">
        <input
          type="text"
          placeholder="Buscar aluno..."
          value={searchInput}
          onChange={handleSearchInputChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 w-96"
        />
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="w-80 ml-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 font-raleway"
        >
          <option value="name">Name</option>
          <option value="date">Date of inclusion</option>
        </select>
      </div>
      <div className="text-center text-3xl mb-14 font-raleway">
        Its current inactive students are:
      </div>
      <div className="flex flex-wrap justify-center mb-72">
        {inactivStudentsData.map((student) => (
          <Link
            key={student.id}
            to={() => goToStudent(navigate, student.id)}
            className="flex flex-col gap-8 m-2 text-center items-center justify-self-center align-middle justify-center  p-2 border border-gray-300 rounded-lg cursor-pointer shadow-md w-80 h-40 hover:bg-gray-200"
          >
            <div className="text-2xl">{student.name}</div>
            <span className="text-blue-500">Ver mais</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InactiveStudentPage;
