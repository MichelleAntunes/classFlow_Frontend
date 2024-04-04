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
        className="opacity-85 font-raleway flex items-center justify-center w-full h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col text-center w-90 lg:w-3/4 md:w-full sm:w-full gap-20">
          <h1 className="text-white lg:text-8xl md:text-6xl sm:text-4xl font-raleway">
            WELCOME TO CLASSFLOW
          </h1>
          <h3 className="font-raleway text-white lg:text-3xl md:text-2xl sm:text-xl">
            Learning without borders
          </h3>
        </div>
      </div>
      <div className="flex mt-2">
        <div
          className="font-raleway items-center justify-center w-2/4 lg:w-1/2 md:w-full sm:w-full h-100 bg-cover"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        ></div>
        <div className="flex gap-12 p-6 lg:p-36 md:p-24 sm:p-12 flex-col text-start justify-center bg-green-100 w-2/4 lg:w-1/2 md:w-full sm:w-full">
          <h1 className="text-black lg:text-4xl md:text-3xl sm:text-2xl font-raleway">
            HOW IT WORKS
          </h1>
          <h3 className="font-raleway text-black lg:text-base md:text-sm sm:text-xs">
            Discover the simplicity of managing your students with Classflow.
            Our platform offers a seamless experience for freelance teachers,
            providing intuitive tools to streamline your student organization
            process. From registering new students to tracking grades and notes,
            Classflow simplifies every step. Experience efficiency like never
            before as you navigate through our user-friendly interface. Join us
            and see just how easy it can be to stay organized and focused on
            what truly matters: your students' success.
          </h3>
        </div>
      </div>
      <div className="flex gap-10 p-32">
        <div
          className="opacity-85 font-raleway items-center justify-center w-full h-96 bg-cover"
          style={{ backgroundImage: `url(${backgroundTeacher})` }}
        ></div>
        <div className="flex gap-10 flex-col text-start justify-center w-full">
          <h1 className="text-black text-2xl font-raleway">
            NOW YOU CAN ORGANISE ALL YOUR STUDENTS IN A SINGLE PLATFORM
          </h1>
          <h3 className="font-raleway text-black text-m">
            Say goodbye to scattered lists and endless paperwork. Classflow
            empowers you to centralize your student management in one convenient
            platform. No more juggling multiple systems or struggling to keep
            track of important information. With Classflow, you can effortlessly
            organize all your students, classes, grades, and notes in one place.
            Save time, reduce stress, and enhance productivity as you enjoy the
            simplicity of having everything you need at your fingertips. Take
            control of your teaching journey with Classflow today.
          </h3>
        </div>
      </div>
      <div className="flex gap-10 pl-32 pr-32 pb-32">
        <div
          className="opacity-85 font-raleway items-center justify-center w-full h-96 bg-cover"
          style={{ backgroundImage: `url(${backgroundComunity})` }}
        ></div>
        <div className="flex gap-10 flex-col text-start justify-center w-full">
          <h1 className="text-black text-2xl font-raleway">
            GROW YOUR STUDENT COMMUNITY
          </h1>
          <h3 className="font-raleway text-black text-m">
            Unlock the potential to expand your student community with
            Classflow. Our platform isn't just about managing your current
            students—it's about fostering growth and connection. Seamlessly add
            new students to your classes, engage with your community, and watch
            your network flourish. With Classflow, you'll have the tools and
            support you need to attract, retain, and empower students like never
            before. Join our vibrant community of educators and learners and
            embark on a journey of growth together. Start growing your student
            community with Classflow today.
          </h3>
        </div>
      </div>
      <div className="flex gap-10 pl-32 pr-32 pb-32">
        <div
          className="opacity-85 font-raleway items-center justify-center w-full h-96 bg-cover"
          style={{ backgroundImage: `url(${backgroundStudentTeacher})` }}
        ></div>
        <div className="flex gap-10 flex-col text-start justify-center w-full">
          <h1 className="text-black text-2xl font-raleway">
            INTERACT WITH YOUR STUDENTS EASILY
          </h1>
          <h3 className="font-raleway text-black text-m">
            Engage, connect, and inspire with ease using Classflow. Our platform
            is designed to facilitate seamless communication and interaction
            between teachers and students. Say goodbye to barriers and hello to
            effortless engagement as you utilize our intuitive features to
            interact with your students in real-time. From sharing important
            updates to facilitating discussions and providing feedback,
            Classflow empowers you to create meaningful connections that enhance
            the learning experience. Experience the power of easy interaction
            and take your teaching to new heights with Classflow today.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
