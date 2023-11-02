import React, { useState } from "react";
import { FormularioLoginCSS } from "./FormularioLogin";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel } from "@chakra-ui/react";

function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    navigate("./home");
  };

  return (
    <FormularioLoginCSS>
      <FormControl onSubmit={handleSubmit} className="form">
        <div className="email">
          <FormLabel htmlFor="email">E-mail</FormLabel>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Entrar</button>
      </FormControl>
    </FormularioLoginCSS>
  );
}

export default FormularioLogin;
