import { api } from "../api/api";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [idUser, setIdUser] = useState('')
    const [carrinhoUsuario, setCarrinhoUsuario] = useState([])
    const [user, setUser] = useState({
        id: 1,
        nome: 'Raphael da Rocha Pinto Barboza',
        carrinhoUsuario: [],
      });

      
      const adicionarProdutoAoCarrinho = async (produto) => {
          const novoCarrinho = [...user.carrinhoUsuario, produto];
          setUser((prevUser) => ({
              ...prevUser,
              carrinhoUsuario: novoCarrinho,
            }));
            
            try {
                await api.patch(`/users/${user.id}`, {
                    carrinhoUsuario: novoCarrinho,
                });
                console.log("Carrinho atualizado no servidor");
            } catch (error) {
                console.error("Erro ao atualizar carrinho no servidor", error);
            }
        };
        
    return <UserContext.Provider value={{user, setUser, adicionarProdutoAoCarrinho, nome, setNome, idUser, setIdUser}}>{children}</UserContext.Provider>
}