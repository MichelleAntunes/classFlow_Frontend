import React from "react";
import {
  emailPattern,
  namePattern,
  passwordPattern,
} from "../../constants/patterns";

const SignupPage = () => {
  const signup = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={signup} action="">
        <input
          type="text"
          placeholder="name"
          pattern={namePattern}
          title="Name inválido."
        />
        <input
          type="email"
          placeholder="email@email.com"
          pattern={emailPattern}
          title="Entre com um e-mail válido."
        />
        <input
          type="password"
          placeholder="Password123!"
          pattern={passwordPattern}
          title="Senha inválida"
        />
      </form>
    </div>
  );
};

export default SignupPage;
