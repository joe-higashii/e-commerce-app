import { createContext, useState } from "react";

export const GeralContext = createContext({});

export const GeralProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState('')

  return <GeralContext.Provider value={{produtos, setProdutos, categoria, setCategoria}}>{children}</GeralContext.Provider>;
};
