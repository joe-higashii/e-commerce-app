import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";
import {
  Box,
  Grid,
  GridItem,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
  IconButton,
  Text,
  Image,
} from "@chakra-ui/react";
import NavBar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AccordionDesc from "../../components/Accordion/AccordionDesc";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";

const Produto = () => {
  const [produto, setProduto] = useState({});
  const { id } = useParams();
  const { carrinhoUsuario, adicionarProdutoAoCarrinho } =
    useContext(UserContext);

  const handleAdicionarAoCarrinho = () => {
    adicionarProdutoAoCarrinho(produto);
    console.log(handleAdicionarAoCarrinho);
  };

  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    setProduto(response.data);
  };
  useEffect(() => {
    getProduto();
  }, []);
  return (
    <>
      <NavBar />
      <Grid
        h="300px"
        w="80%"
        justifyContent="center"
        alignContent="center"
        templateRows="repeat(3, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={3}
        padding={"1rem"}
      >
        <GridItem
          rowSpan={4}
          colSpan={1}
          alignSelf={"center"}
          justifySelf={"center"}
        >
          <Image
            objectFit="contain"
            maxW={{ base: "90%", sm: "200px" }}
            src={produto.imagem}
            alt="Caffe Latte"
          />
        </GridItem>

        <GridItem h={10} rowSpan={1} colSpan={2}>
          <Heading size="md">{produto.nome}</Heading>
        </GridItem>

        <GridItem rowSpan={2} colSpan={2}>
          <Text py="2">{produto.resumo}</Text>
        </GridItem>

        <GridItem h="10" colSpan={2}>
          <Box display="flex" alignItems="center" justifyContent={"center"}>
            <Text as="b" fontSize="4xl" w="200px">
              R${produto.preco}
            </Text>
            <Button
              ml={2}
              fontWeight="bold"
              w="200px"
              variant="solid"
              colorScheme="purple"
            >
              COMPRAR
            </Button>
            <IconButton
              ml={5}
              icon={<MdAddShoppingCart />}
              variant="outline"
              colorScheme="purple"
              onClick={() => adicionarProdutoAoCarrinho(produto)}
            />
          </Box>
        </GridItem>
      </Grid>

      <br />
      <AccordionDesc descricao={produto.descricao} />
      <Footer />
    </>
  );
};
export default Produto;
