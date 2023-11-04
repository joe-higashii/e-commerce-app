import { createContext, useState } from "react";

export const GeralContext = createContext({});

export const GeralProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState('')

  return <GeralContext.Provider value={{produtos, setProdutos, nome, setNome}}>{children}</GeralContext.Provider>;
};
