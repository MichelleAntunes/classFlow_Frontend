import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/baseURL";

const FeedPage = () => {
  useProtectedPage();
  const students = useRequestData(`${BASE_URL}/students`, []);
  console.log(students);

  return <div>Feed</div>;
};

export default FeedPage;
