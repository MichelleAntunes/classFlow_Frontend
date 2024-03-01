import { useState, useEffect } from "react";
import axios from "axios";
import { getHeaders } from "../utils/storageManager";

export function useRequestData(url, initialState) {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(url, getHeaders())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error.message));
  }, [url]);

  return data;
}
