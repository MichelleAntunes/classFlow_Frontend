// import React, { useState } from "react";
// import { useProtectedPage } from "../../hooks/useProtectedPage";
// import { useRequestData } from "../../hooks/useRequestData";
// import axios from "axios";
// import { BASE_URL } from "../../constants/baseURL";

// const NewStudent = () => {
//   useProtectedPage();

//   const [studentName, setStudentName] = useState("");
//   const [email, setEmail] = useState("");
//   const [telephone, setTelephone] = useState("");
//   const [age, setAge] = useState("");
//   const [photo, setPhoto] = useState(""); // Altere conforme necessário para carregar a foto

//   // Função para lidar com o envio do formulário
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Objeto com os dados do novo estudante
//     const newStudentData = {
//       name: studentName,
//       email,
//       telephone,
//       age,
//       photo, // Altere conforme necessário para carregar a foto
//     };

//     try {
//       // Requisição POST para adicionar o novo estudante
//       const response = await axios.post(
//         `${BASE_URL}/students/create`,
//         newStudentData
//       );

//       // Se a requisição for bem-sucedida, exibir mensagem de sucesso
//       console.log("Novo estudante adicionado com sucesso:", response.data);
//     } catch (error) {
//       // Se ocorrer algum erro, exibir mensagem de erro
//       console.error("Erro ao adicionar novo estudante:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <div className="m-10 p-10 bg-gray-100 rounded-lg">
//         <h2 className="text-center mb-4">Add New Student</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="studentName">Name:</label>
//             <input
//               type="text"
//               id="studentName"
//               value={studentName}
//               onChange={(event) => setStudentName(event.target.value)}
//               required
//               className="border border-gray-300 rounded-lg p-2 w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="email">E-Mail:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               required
//               className="border border-gray-300 rounded-lg p-2 w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="telephone">Telephone:</label>
//             <input
//               type="tel"
//               id="telephone"
//               value={telephone}
//               onChange={(event) => setTelephone(event.target.value)}
//               required
//               className="border border-gray-300 rounded-lg p-2 w-full"
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="age">Age:</label>
//             <input
//               type="number"
//               id="age"
//               value={age}
//               onChange={(event) => setAge(event.target.value)}
//               required
//               className="border border-gray-300 rounded-lg p-2 w-full"
//             />
//           </div>
//           <div>
//             {/* Adicione aqui o campo de upload de foto, se necessário */}
//           </div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
//           >
//             Add student
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default NewStudent;

import React, { useState } from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/baseURL";

const NewStudent = () => {
  useProtectedPage();

  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Objeto com os dados do novo estudante
    const newStudentData = {
      name: studentName,
      email,
      phone: telephone, // Alterado de telephone para phone para corresponder ao esperado pelo servidor
      age: parseInt(age), // Convertendo age para número
      role: "NORMAL", // Definindo um valor padrão para role, se necessário
    };

    // Recuperando o token do localStorage
    const token = localStorage.getItem("token");

    try {
      // Requisição POST para adicionar o novo estudante
      const response = await axios.post(
        `${BASE_URL}/students/create`,
        newStudentData,
        {
          headers: {
            Authorization: token, // Enviando o token no cabeçalho da requisição
          },
        }
      );

      // Se a requisição for bem-sucedida, exibir mensagem de sucesso
      console.log("Novo estudante adicionado com sucesso:", response.data);
    } catch (error) {
      // Se ocorrer algum erro, exibir mensagem de erro
      console.error("Erro ao adicionar novo estudante:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="m-10 p-10 bg-gray-100 rounded-lg">
        <h2 className="text-center mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentName">Name:</label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(event) => setStudentName(event.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">E-Mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(event) => setTelephone(event.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photo">Photo:</label>
            <input
              type="text"
              id="photo" // Corrigido de "age" para "photo"
              value={photo}
              onChange={(event) => setPhoto(event.target.value)}
              required
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Add student
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewStudent;
