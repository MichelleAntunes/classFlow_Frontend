//hook needed to protect the feed page, for example. So you can only access the Feed page after a valid login or signup

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
};
