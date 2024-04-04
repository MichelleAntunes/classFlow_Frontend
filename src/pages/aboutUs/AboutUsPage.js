import React from "react";
import MichelleDeveloper from "../../assets/MichelleDeveloper.jpg";

const AboutUsPage = () => {
  return (
    <div className="container mx-auto mt-8 pb-8">
      {" "}
      {/* Adicionando uma margem inferior ao conteúdo principal */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About the Developer:</h1>
          <p className="text-lg">
            My name is Michelle Antunes, a 30-year-old native of Criciuma, Santa
            Catarina, Brazil. I hold a bachelor's degree in Business
            Administration and a postgraduate degree in Financial Management and
            Controllership. Furthermore, I am also a graduate in Analysis and
            Systems Development, as well as a Full Stack Web Developer Bootcamp
            gradute. Since 2019, I have been residing in Germany.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={MichelleDeveloper}
            alt="Michelle Developer"
            className="rounded-full h-auto w-40 md:w-50 lg:w-60 object-cover"
          />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">About ClassFlow</h1>
        <p className="text-lg">
          Initially, my move to Germany aimed at seasonal work in the gastronomy
          sector, allowing me to spend the summer holidays in Brazil. However,
          Germany captured my heart, unveiling new paths that solely depended on
          my determination to pursue them. Thus, in 2022, I embarked on a career
          transition into the field of technology, which has since become my
          passion. During this career transition, I recognized the importance of
          not only speaking German but also English. Not only is English crucial
          for this profession, but also as a tourist in other cities, and for
          foreigners living in Germany who may not initially speak German.
          <br /> <br />
          Consequently, I began private lessons with an incredible Brazilian
          teacher named Matheus Serafim. His patience and dynamic teaching style
          were essential in facilitating my learning journey. However, he
          utilized the same paper-based organizational method for all his
          students. Firstly, in today's world, we must prioritize caring for and
          preserving our future. Secondly, the paper-based organization proved
          challenging due to the abundance of documents, increasing the risk of
          losing important information. Considering these challenges and with
          valuable guidance from my teacher, the idea for ClassFlow was
          conceived. This personal project marked a significant milestone in my
          professional life. Developing it entirely on my own, I encountered
          numerous errors and challenges daily, necessitating the search for
          intelligent solutions independently.
          <br /> <br />
          Through this process, I experienced significant personal growth in
          problem-solving skills. ClassFlow initially aims to serve educational
          purposes and is still a work in progress. However, I am fully
          committed to keeping it updated and functional, driven by my passion
          for continuous improvement and learning.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
