import { Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  Select,
  Stack,
  Show,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";
import { api } from "../../api/api";
import { GeralContext } from "../../context/GeralContext";
import { FaGitkraken } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import CadastroModal from "../Modal/CadastroModal";

export const NavBar = () => {
  const { produtos, setProdutos } = useContext(GeralContext);
  const { categoria, setCategoria } = useContext(GeralContext);
  const navigate = useNavigate();

  const handleCategoriaChange = async (e) => {
    const categoria = e.target.value;
    const response = await api.get("/produtos", {
      params: { categoria: categoria },
    });
    setProdutos(response.data);
    console.log(response.data);
    navigate("/lista/produtos");
  };

  const inputRef = useRef();
  const handlePesquisarInput = async (e) => {
    // Wait for the value of the input element to be updated before calling the filter function.
    await new Promise((resolve) => setTimeout(resolve, 0));

    const produto = inputRef.current.value;
    console.log(produto);
    const response = await api.get("/produtos", {
      params: { produto: produto },
    });
    const filteredProducts = response.data.filter((product) => {
      console.log(product.nome);
      return product.nome.toLowerCase().includes(produto.toLowerCase());
    });
    setProdutos(filteredProducts);
    console.log(filteredProducts);
    navigate("/lista/produtos");
  };

  //FAZER A PESQUISA CLICANDO NO BUTTON
  const handlePesquisaChange = async (e) => {
    const produto = e.target.value;
    handlePesquisarInput();
  };

  const getProdutos = async (e) => {
    const produto = e.target.value;
    const response = await api.get("/produtos", {
      params: { produto: produto },
    });
    setProdutos(response.data);
    console.log(response.data);
    navigate("/lista/produtos");
  };

  const navigateFavoritos = () => {
    navigate("/favoritos");
  };

  const navigateCarrinho = () => {
    navigate("/carrinho");
  };

  const navigatePedidos = () => {
    navigate("/pedidos");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  return (
    <>
      <Flex justifyContent={'flex-end'}>
      <Button size={'sm'} variant={'ghost'} colorScheme="black" mt={4} mr={1} onClick={navigateLogin}>
        Login
      </Button>
      <CadastroModal />
      </Flex>
      <Flex
        display={{ base: "block", xl: "flex" }}
        wrap={"nowrap"}
        spacing={4}
        direction="row"
        align="center"
        m="1rem"
        justifyContent={"space-between"}
        gap={"1rem"}
      >
        {/* <FaGitkraken /> */}
        <Text onClick={navigateHome} mr={"2rem"} fontSize={"2rem"} mb={".5rem"}>
          <a href="">
            <strong> KRAKEN</strong>
          </a>
        </Text>
        <Button onClick={getProdutos} variant="ghost" w="sm">
          Todos os Produtos
        </Button>
        <Select
          variant="ghost"
          // placeholder="Categorias"
          w="lg"
          defaultValue={categoria}
          onChange={handleCategoriaChange}
        >
          <option value={"Hardware"}>Hardware</option>
          <option value={"Periféricos"}>Periféricos</option>
          <option value={"Cama"}>Cama</option>
          <option value={"banho"}>banho</option>
        </Select>
        {/* SEARCHBAR */}
        <InputGroup borderRadius={5} size="sm">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.600" />}
          />
          <Input
            type="text"
            placeholder="Search..."
            ref={inputRef}
            border="1px solid #949494"
          />
          <InputRightAddon p={0} border="none">
            <Button
              onClick={handlePesquisaChange}
              size="sm"
              borderLeftRadius={0}
              borderRightRadius={3.3}
              border="1px solid #949494"
            >
              Buscar
            </Button>
          </InputRightAddon>
        </InputGroup>
        {/* BOTÕES LATERAIS */}
        <Button
          onClick={navigateFavoritos}
          breakpoint="(min-width: 481px)"
          leftIcon={<MdFavoriteBorder />}
          variant="ghost"
          w="16rem"
        >
          Favoritos
        </Button>
        <Button
          onClick={navigateCarrinho}
          breakpoint="(min-width: 481px)"
          leftIcon={<MdAddShoppingCart />}
          variant="ghost"
          w="16rem"
        >
          Carrinho
        </Button>
        <Button
          onClick={navigatePedidos}
          breakpoint="(min-width: 481px)"
          leftIcon={<BsBagCheckFill />}
          variant="ghost"
          w="16rem"
        >
          Pedidos
        </Button>
      </Flex>
      {/* NAVBAR MOBILE LATERAIS MOBILE*/}
      {/* <Show breakpoint ='(max-width: 480px)'>
                    <IconButton  aria-label='Favoritos' icon={<MdFavoriteBorder />} />
                    <IconButton  aria-label='Carrinho' icon={<MdAddShoppingCart />} />
                </Show> */}
    </>
  );
};

export default NavBar;
