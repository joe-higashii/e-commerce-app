import { api } from "../api/api";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [nome, setNome] = useState('');
    const [idUser, setIdUser] = useState('');
    const [carrinhoUsuario, setCarrinhoUsuario] = useState([]);
    const [user, setUser] = useState({
        id: 1,
        nome: 'Raphael da Rocha Pinto Barboza',
        carrinhoUsuario: [],
    });

    const getProdutosDoCarrinho = async () => {
        try {
            const response = await api.get(`/users/${user.id}`);
            const carrinhoDoBanco = response.data.carrinhoUsuario || [];
            setCarrinhoUsuario(carrinhoDoBanco);
        } catch (error) {
            console.error("Erro ao carregar produtos do carrinho do usuário", error);
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await api.get(`/users/${user.id}`);
                setUser(response.data);
                getProdutosDoCarrinho();
            } catch (error) {
                console.error("Erro ao carregar dados do usuário", error);
            }
        };

        fetchUserData();
    }, [idUser]);

    const adicionarProdutoAoCarrinho = async (produto) => {
        
        let novoCarrinho;

        const produtoExistente = user.carrinhoUsuario.find((item) => item.id === produto.id);

        if (produtoExistente) {
            novoCarrinho = user.carrinhoUsuario.map((item) =>
                item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
            );
        } else {
            novoCarrinho = [...user.carrinhoUsuario, { ...produto, quantidade: 1 }];
        }

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

    return (
        <UserContext.Provider value={{ user, setUser, adicionarProdutoAoCarrinho, nome, setNome, idUser, setIdUser, carrinhoUsuario }}>
            {children}
        </UserContext.Provider>
    );
};
