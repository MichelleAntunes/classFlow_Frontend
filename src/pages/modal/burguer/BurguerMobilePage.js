import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStorageItem } from "../../../utils/storageManager";
import { goToHome } from "../../../routes/cordinator";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { RxCalendar } from "react-icons/rx";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoExitOutline } from "react-icons/io5";

const BurguerMobilPageModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const logout = () => {
    deleteStorageItem("token");
    goToHome(navigate);
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
            </div>
            <div className="flex gap-4 items-center">
              <IoMdAdd />
            </div>
            <div className="flex gap-4 items-center">
              <RxCalendar />
            </div>
            <div className="flex gap-4 items-center">
              <FaPeopleGroup />
            </div>
            <div className="flex gap-4 items-center">
              <IoExitOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurguerMobilPageModal;
