import React, { useContext, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import CustomEditor from "../Forms/CustomEditor";
import { Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { api } from "../../api/api";
import { UserContext } from "../../context/UserContext.jsx";

const AccordionComentario = ({ objProduto }) => {
  const { user, setUser } = useContext(UserContext)
  const [editorValue, setEditorValue] = useState("");
  const [notaEstrela, setNotaEstrela] = useState(0);

  const comentarios = objProduto.produto.comentarios || [];
  const quantidadeEstrelas = 5;
  const arrayEstrelas = Array.from(
    { length: quantidadeEstrelas },
    (_, index) => {
      return index < notaEstrela ? "gold" : "gray";
    }
  );

  return (
    <Accordion mt={"3rem"} w={"100%"} defaultIndex={[1]} allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              COMENTÁRIOS
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel className="accordion-desc" pb={4}>
          <Text fontSize={"1.2rem"} fontWeight={"bold"}>
            Deixe seu comentário:
          </Text>
          <CustomEditor onEditorChange={setEditorValue} />
          {arrayEstrelas.map((cor, index) => (
            <IconButton
              size={"xs"}
              key={index}
              mr={".5rem"}
              mt={".5rem"}
              icon={<AiFillStar color={cor} />}
              variant="outline"
              colorScheme="yellow"
              onClick={() => setNotaEstrela(index + 1)}
            />
          ))}

          <Flex>
            <Button
              mt={".7rem"}
              variant={"outline"}
              colorScheme="purple"
              onClick={async () => {
                if (objProduto.produto) {
                  const novoComentario = {
                    idUser: 1,
                    comentario: editorValue,
                    nota: notaEstrela,
                  };
                  objProduto.produto.comentarios.push(novoComentario);
                  try {
                    await api.patch(`/produtos/${objProduto.produto.id}`, {
                      comentarios: objProduto.produto.comentarios,
                    });
                  } catch (error) {
                    console.error(
                      `Erro ao criar o comentário do produto ${objProduto.produto.id}`,
                      error
                    );
                  }
                }
              }}
            >
              Enviar Comentário
            </Button>
          </Flex>
          {Array.isArray(comentarios) &&
            comentarios.map(({ comentario, idUser, nota }) => {
              return (
                <Flex
                  gap={".3rem"}
                  mt={"2rem"}
                  padding={"1rem"}
                  w={"60%"}
                  borderRadius={"12px"}
                  border={"1px solid #D9D9D9"}
                  flexDir={"column"}
                >
                  <Text fontSize={"1.2rem"} fontWeight={"bold"}>
                    Usuário: {user.nome}
                  </Text>

                  <Text>Nota: {nota} Estrelas</Text>
                  <Text>{comentario}</Text>
                </Flex>
              );
            })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionComentario;
