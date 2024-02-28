import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLogin } from "../routes/cordinator";
import { getStorageItem } from "../utils/storageManager";

export const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getStorageItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};

//hook needed to protect the feed page, for example. So you can only access the Feed page after a valid login or signup
