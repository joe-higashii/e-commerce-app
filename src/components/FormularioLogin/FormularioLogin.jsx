import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormControl, FormLabel, Input, Button, Tooltip, Text, Flex, Checkbox, Center } from "@chakra-ui/react";
import { api } from "../../api/api";
import { UserContext } from "../../context/UserContext";
import CadastroModal from "../Modal/CadastroModal";

export default function FormularioLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { nome, setNome, idUser, setIdUser } = useContext(UserContext)

  const getUsers = async () => {
    try {
      const response = await api.get("/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loading) {
      const user = users.find((user) => user.email === email && user.senha === password);

      if (user) {
        setNome(user.nome);
        setIdUser(user.id);
        navigate("/home");
      }
    }

    setEmail("");
    setPassword("");
  };

  return (
    <FormControl w={'300px'} className="form">
      <div className="email">
        <FormLabel mt={'1rem'} htmlFor="email">E-mail</FormLabel>
        <Tooltip hasArrow label='O campo e-mail é obrigatório!' bg='red.600'>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </Tooltip>
      </div>
      <div className="password">
        <FormLabel mt={'1rem'} htmlFor="password">Senha</FormLabel>
        <Tooltip hasArrow label='O campo senha é obrigatório!' bg='red.600'>
          <Input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
          />
        </Tooltip>
        <Checkbox colorScheme="purple" mt={'.5rem'} mr={'10.3rem'} justifySelf={'start'}>
          Lembra de mim
        </Checkbox>
      </div>
      <br />
      <Button w={'100%'} onClick={handleSubmit} colorScheme='purple'>Entrar</Button>
      <Flex justifyContent={"center"}>
        <Text alignSelf={'center'} fontSize={'.8rem'} mt={'1rem'}>Não tem uma conta?</Text>
        <CadastroModal></CadastroModal>
      </Flex>


    </FormControl>
  );
}