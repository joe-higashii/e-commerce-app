import { createContext, useState } from "react";

export const GeralContext = createContext({});

export const GeralProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [pedidos, setPedidos] = useState([]);

  return <GeralContext.Provider value={{produtos, setProdutos, categoria, setCategoria, pedidos, setPedidos}}>{children}</GeralContext.Provider>;
};
