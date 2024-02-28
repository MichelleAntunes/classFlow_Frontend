import { useState } from "react";

export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  return [form, onChange];
};

//This code prevents the excessive use of states within other logics.
