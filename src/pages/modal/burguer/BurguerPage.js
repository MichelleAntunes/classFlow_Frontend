// import React from "react";
// import { Link } from "react-router-dom";
// import { deleteStorageItem } from "../../../utils/storageManager";
// import { goToHome } from "../../../routes/cordinator";
// import { CgProfile } from "react-icons/cg";
// import { IoMdAdd } from "react-icons/io";
// import { RxCalendar } from "react-icons/rx";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { IoExitOutline } from "react-icons/io5";
// import { IoCloseSharp } from "react-icons/io5";

// const BurguerPageModal = ({ isOpen, onClose }) => {
//   const logout = () => {
//     deleteStorageItem("token");
//     goToHome();
//   };

//   const handleCloseModal = () => {
//     onClose();
//   };

//   const handleLinkClick = () => {
//     onClose();
//   };

//   return (
//     <div
//       className={`modal ${isOpen ? "open" : ""} border rounded border-black`}
//     >
//       <div className="overlay" onClick={handleCloseModal}></div>
//       <div className=" m-4 modal-content">
//         <div className="m-4 gap-4 items-center flex modal-header">
//           <h2>Hello Professor Smith</h2>
//         </div>
//         <div className="modal-body">
//           <div className="flex flex-col gap-4">
//             <div className="flex gap-4 items-center">
//               <CgProfile />
//               <Link to={"/teacherProfil"} onClick={handleLinkClick}>
//                 My profile
//               </Link>
//             </div>
//             <div className="flex gap-4 items-center">
//               <IoMdAdd />
//               <Link to="/newStudent" onClick={handleLinkClick}>
//                 Add new student
//               </Link>
//             </div>
//             <div className="flex gap-4 items-center">
//               <RxCalendar />
//               <Link to={"/calendar"} onClick={handleLinkClick}>
//                 My calendar
//               </Link>
//             </div>
//             <div className="flex gap-4 items-center">
//               <FaPeopleGroup />
//               <Link to={"/newClass"} onClick={handleLinkClick}>
//                 Add a new class
//               </Link>
//             </div>
//             <div className="flex gap-4 items-center">
//               <IoExitOutline />
//               <button onClick={logout}>Logout</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BurguerPageModal;
import React from "react";
import { Link } from "react-router-dom";
import { deleteStorageItem } from "../../../utils/storageManager";
import { goToHome } from "../../../routes/cordinator";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { RxCalendar } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";

const BurguerPageModal = ({ isOpen, onClose }) => {
  const logout = () => {
    deleteStorageItem("token");
    goToHome();
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${isOpen ? "open" : ""} border rounded border-black`}
    >
      <div className="overlay" onClick={handleCloseModal}></div>
      <div className=" m-4 modal-content">
        <div className="m-4 gap-4 items-center flex modal-header">
          <h2>Hello Professor Smith</h2>
        </div>
        <div className="modal-body">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <CgProfile />
              <Link to={"/teacherProfil"} onClick={handleLinkClick}>
                My profile
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <IoMdAdd />
              <Link to="/newStudent" onClick={handleLinkClick}>
                Add new student
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <RxCalendar />
              <Link to={"/calendar"} onClick={handleLinkClick}>
                My calendar
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <FaPeopleGroup />
              <Link to={"/newClass"} onClick={handleLinkClick}>
                Add a new class
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <IoExitOutline />
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurguerPageModal;
