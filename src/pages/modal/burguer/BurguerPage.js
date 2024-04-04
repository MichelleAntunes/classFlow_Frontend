import React from "react";
import { useRequestData } from "../../../hooks/useRequestData";
import { BASE_URL } from "../../../constants/baseURL";

const BurguerPageModal = () => {
  const studentsData = useRequestData(`${BASE_URL}/students`, []);
  const teachersData = useRequestData(`${BASE_URL}/teachers/teachers`, []);

  console.log(teachersData);

  console.log(studentsData);
  return (
    <div>
      <h1>modal</h1>
      <div>{teachersData.name}</div>
    </div>
  );
};

export default BurguerPageModal;
