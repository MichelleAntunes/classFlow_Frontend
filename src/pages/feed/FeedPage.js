import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseURL";
import { Link, useNavigate } from "react-router-dom"; // Importe Link para navegação interna
import { goToStudent } from "../../routes/cordinator"; // Importe a função goToStudent para a página correspondente

const FeedPage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const studentsData = useRequestData(`${BASE_URL}/students`, []);
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const sortedStudents = filteredStudents.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "date") {
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
  });

  const nameTeacher =
    studentsData && studentsData.length && studentsData[0].teacherId.name;

  return (
    <div className="flex flex-col min-h-screen items-center bg-gray-50 gap-10 pt-10">
      <div className="mt-8 mb-4 text-center text-5xl font-bold font-raleway">
        Welcome {nameTeacher}!
      </div>
      <div className="flex justify-center mb-20 m-20">
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
      <div className="text-center text-3xl mb-4 font-raleway">
        His current students are:
      </div>
      <div className="flex flex-wrap justify-center">
        {sortedStudents.map((student) => (
          <Link
            key={student.id}
            to={() => goToStudent(navigate, student.id)}
            className="flex flex-col gap-8 m-2 text-center items-center justify-self-center align-middle justify-center  p-2 border border-gray-300 rounded-lg cursor-pointer shadow-md w-80 h-40 hover:bg-gray-200"
          >
            <div className="text-2xl">{student.name}</div>
            <span className="text-blue-500">More</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
