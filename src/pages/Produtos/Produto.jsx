import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import AccordionComentario from "../../components/Accordion/AccordionComentario.jsx";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext.jsx";
import { AiFillStar } from "react-icons/ai";

const Produto = () => {
  const [produto, setProduto] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { carrinhoUsuario, adicionarProdutoAoCarrinho } =
    useContext(UserContext);

  const handleAdicionarAoCarrinho = () => {
    adicionarProdutoAoCarrinho(produto);
    console.log(handleAdicionarAoCarrinho);
  };

  const handleComprarProduto = () => {
    adicionarProdutoAoCarrinho(produto);
    navigate("/carrinho");
  };

  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    setProduto(response.data);
  };

  const calcularMediaNotas = () => {
    if (produto.comentarios && produto.comentarios.length > 0) {
      const totalNotas = produto.comentarios.reduce(
        (acumulador, comentario) => acumulador + comentario.nota,
        0
      );
      const media = totalNotas / produto.comentarios.length;
      return Math.round(media);
    }
    return 0;
  };

  useEffect(() => {
    getProduto();
  }, [calcularMediaNotas]);

  const notaMedia = calcularMediaNotas();
  const quantidadeEstrelas = 5;
  const arrayEstrelas = Array.from({ length: quantidadeEstrelas }, (_, index) => {
    return index < notaMedia ? "gold" : "gray";
  });

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
              onClick={handleComprarProduto}
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
      <div>
        <Text fontSize={"1.2rem"} fontWeight={"bold"}>
          AVALIAÇÃO
        </Text>
        {arrayEstrelas.map((cor, index) => (
          <IconButton
            key={index}
            ml={5}
            icon={<AiFillStar color={cor} />}
            variant="outline"
            colorScheme="yellow"
          />
        ))}
      </div>
      <AccordionComentario />
      <Footer />
    </>
  );
};
export default Produto;
