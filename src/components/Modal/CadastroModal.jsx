import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { api } from "../../api/api";

function CadastroModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaRepetida, setSenhaRepetida] = useState("");

  const cadastrarUsuario = async () => {
    try {
      if (senha !== senhaRepetida) {
        alert("As senhas não coincidem.");
        return;
      }

      const response = await api.post("/users", {
        nome,
        email,
        senha,
        carrinhoUsuario: [],
      });

      console.log(response.data);

      onClose();
    } catch (error) {
      console.error("Erro ao cadastrar usuário", error);
    }
  };

  return (
    <>
      <Button size={'sm'} variant={'ghost'} colorScheme="purple" mt={4} onClick={onOpen} >
        Cadastrar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crie sua conta</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome Completo</FormLabel>
              <Input
                placeholder="Digite o seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Digite o seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Repetir Senha</FormLabel>
              <Input
                type="password"
                placeholder="Digite sua senha"
                value={senhaRepetida}
                onChange={(e) => setSenhaRepetida(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={cadastrarUsuario}>
              Cadastrar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CadastroModal;
