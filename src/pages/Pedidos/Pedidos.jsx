import React, { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../context/UserContext";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import { GeralContext } from "../../context/GeralContext";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const Pedidos = () => {
  const { nome, idUser, user } = useContext(UserContext);
  const { pedidos, setPedidos } = useContext(GeralContext);
  const { id } = useParams();

  const [isAccordionExpanded, setIsAccordionExpanded] = useState(null);
  const [produtos, setProdutos] = useState([]);

  const handleAccordionClick = (index) => {
    setIsAccordionExpanded(index);
  };

  const getPedidos = async () => {
    try {
      const response = await api.get(`/pedidos/`);
      if (response.status === 200) {
        const aux = response.data.filter((pedido) => pedido.idUser === user.id);
        setPedidos(aux);
      } else {
        console.error("Erro ao obter a lista de pedidos.");
      }
    } catch (error) {
      console.error("Erro ao obter a lista de pedidos:", error);
    }
  };

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  };

  useEffect(() => {
    getPedidos();
    getProdutos();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar />
      <Text mb={'1rem'} mt={'1.5rem'} align={"start"} fontSize={"2rem"}>
          <strong>{user && user.nome !== undefined ? `${user.nome}` : 'Faça login para acessar seus pedidos'}</strong>
        </Text>
      <Grid minH={'40vh'} templateRows={`repeat(${pedidos.length}, 1fr)`} gap={4}>
        {pedidos.map(({ id, valorTotal, itens }, index) => (
          <div key={id}>
            <Accordion
              allowToggle
              onChange={() => handleAccordionClick(index)}
            >
              <AccordionItem
                isDisabled={false}
                style={{
                  marginBottom: isAccordionExpanded === index ? "-10px" : "0",
                  marginTop: isAccordionExpanded === index ? "-10px" : "0",
                }}
              >
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      style={{ height: "60px", display: "flex" }}
                    >
                      <Box as="span" flex="1" textAlign="left">
                        Pedido Nº {id}
                      </Box>
                      <Box as="span" flex="1" textAlign="center">
                        Forma de pagamento:
                      </Box>
                      <Box as="span" flex="1" textAlign="right">
                        Detalhes do pedido
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <TableContainer>
                        <Table>
                          <Tbody>
                            <Tr>
                              <Td>TOTAL PRODUTO(S)</Td>
                              <Td textAlign={"right"}>R$ {valorTotal.toFixed(2)}</Td>
                            </Tr>
                            <Tr>
                              <Td>DESCONTO</Td>
                              <Td textAlign={"right"}>R$ 0</Td>
                            </Tr>
                            <Tr>
                              <Td>USUARIO</Td>
                              <Td textAlign={"right"}>{user.nome}</Td>
                            </Tr>
                            <Tr>
                              <Td>ITENS</Td>
                              <Td textAlign={"right"}>
                              {itens.map(({ idProduto, quantidade }) => {
                        const produto = produtos.find(
                          (produto) => produto.id === idProduto
                        );

                        if (produto) {
                          return (
                            <Grid
                              key={produto.id}
                              h="150px"
                              templateRows="repeat(2, 1fr)"
                              templateColumns="repeat(5, 1fr)"
                              marginBottom="10px"
                              gap={3}
                            >
                              <GridItem rowSpan={2} colSpan={1}>
                                <img
                                  src={produto.imagem}
                                  alt="Produto"
                                  width={"80px"}
                                />
                              </GridItem>
                              <GridItem colSpan={4} textAlign="left">
                                <h2>{produto.nome}</h2>
                              </GridItem>
                              <GridItem colSpan={4} textAlign="right">
                                <h2>R$ {produto.preco}</h2>
                              </GridItem>
                            </Grid>
                          );
                        }
                        return null;
                      })}
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default Pedidos;
