import { createContext, useState } from "react";

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [nome, setNome] = useState('')
    const [idUser, setIdUser] = useState('')
    const [carrinhoUsuario, setCarrinhoUsuario] = useState([])

    return <UserContext.Provider value={{nome, setNome, idUser, setIdUser}}>{children}</UserContext.Provider>
}