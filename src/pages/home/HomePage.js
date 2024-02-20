import React from "react";
import backgroundImage from "../../assets/studentsHome.jpg";
import backgroundImage2 from "../../assets/studentsHome2.jpg";
import backgroundTeacher from "../../assets/teacherHome.jpg";
import backgroundComunity from "../../assets/comunityHome.jpg";
import backgroundStudentTeacher from "../../assets/teacherStudent.jpg";

const HomePage = () => {
  return (
    <div>
      <div
        className=" opacity-85 font-raleway flex items-center justify-center w-full h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className=" flex flex-col text-center w-90 gap-20">
          <h1 className="text-white text-8xl  font-raleway ">
            BEM-VINDO AO CLASSFLOW
          </h1>
          <h3 className="font-raleway text-white text-3xl">
            Aprendendo sem fronteiras
          </h3>
        </div>
      </div>
      <div className="flex">
        <div
          className=" font-raleway items-center justify-center w-2/4  h-100 bg-cover "
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        ></div>
        <div className=" flex gap-12 p-36 flex-col text-start justify-center bg-green-100 w-2/4  ">
          <h1 className="text-black text-4xl  font-raleway ">COMO FUNCIONA</h1>
          <h3 className="font-raleway text-black text-m">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio
            doloribus facilis doloremque corrupti quo reiciendis, quisquam ea
            exercitationem. Sequi culpa impedit cum optio iusto? Sequi excepturi
            unde pariatur laboriosam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Harum at facere voluptatem, odit unde sapiente
            itaque beatae modi ipsam illum soluta eum, corporis qui pariatur
            neque vero temporibus aperiam possimus?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt nihil, inventore labore qui
            non commodi autem voluptate ad repudiandae, molestiae vel illum
            maiores quas ratione, similique adipisci est. Ipsa, aperiam?
          </h3>
        </div>
      </div>
      <div className="flex gap-10 p-32">
        <div
          className="  font-raleway items-center justify-center w-full h-100 bg-cover "
          style={{ backgroundImage: `url(${backgroundTeacher})` }}
        ></div>
        <div className=" flex gap-10  flex-col text-start justify-center w-100 h-96 ">
          <h1 className="text-black text-2xl  font-raleway ">
            AGORA VOCÊ PODE ORGANIZAR TODOS OS SEUS ALUNOS EM UMA ÚNICA
            PLATAFORMA
          </h1>
          <h3 className="font-raleway text-black text-m">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio
            doloribus facilis doloremque corrupti quo reiciendis, quisquam ea
            exercitationem. Sequi culpa impedit cum optio iusto? Sequi excepturi
            unde pariatur laboriosam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </h3>
        </div>
      </div>
      <div className="flex gap-10 pl-32 pr-32 pb-32">
        <div
          className="  font-raleway items-center justify-center w-full h-100 bg-cover "
          style={{ backgroundImage: `url(${backgroundComunity})` }}
        ></div>
        <div className=" flex gap-10  flex-col text-start justify-center w-100 h-96 ">
          <h1 className="text-black text-2xl  font-raleway ">
            AUMENTE A SUA COMUNIDADE DE ALUNOS
          </h1>
          <h3 className="font-raleway text-black text-m">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio
            doloribus facilis doloremque corrupti quo reiciendis, quisquam ea
            exercitationem. Sequi culpa impedit cum optio iusto? Sequi excepturi
            unde pariatur laboriosam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </h3>
        </div>
      </div>
      <div className="flex gap-10 pl-32 pr-32 pb-32">
        <div
          className="  font-raleway items-center justify-center w-full h-100 bg-cover "
          style={{ backgroundImage: `url(${backgroundStudentTeacher})` }}
        ></div>
        <div className=" flex gap-10  flex-col text-start justify-center w-100 h-96 ">
          <h1 className="text-black text-2xl  font-raleway ">
            INTERAJA COM SEUS ALUNOS FACILMENTE
          </h1>
          <h3 className="font-raleway text-black text-m">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint odio
            doloribus facilis doloremque corrupti quo reiciendis, quisquam ea
            exercitationem. Sequi culpa impedit cum optio iusto? Sequi excepturi
            unde pariatur laboriosam. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
