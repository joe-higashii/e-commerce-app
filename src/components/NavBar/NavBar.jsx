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
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";
import { api } from "../../api/api";
import { GeralContext } from "../../context/GeralContext";

export const NavBar = () => {
  const { produtos, setProdutos } = useContext(GeralContext);
  const navigate = useNavigate();

  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const handleCategoriaChange = async (e) => {
    const categoriaSelecionada = e.target.value;
    const response = await api.get("/produtos", {
      params: { categoria: categoriaSelecionada },
    });
    setProdutos(response.data);
    console.log(response.data);
    navigate("/lista/produtos");
  };

  return (
    <>
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
        <Button variant="ghost" w="xs">
          Todos os Produtos
        </Button>
        <Select
          variant="ghost"
          placeholder="Categorias"
          w="lg"
          defaultValue={categoriaSelecionada}
          onChange={handleCategoriaChange}
        >
          <option value={"Hardware"}>Hardware</option>
          <option value={"Periféricos"}>Periféricos</option>
          <option value={"Cama"}>Cama</option>
          <option value={"banho"}>banho</option>
          {/* {categorias.map((c) => {
            return (
              <option key={c.id} value={c.nome}>
                {c.nome}
              </option>
            );
          })} */}
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
            border="1px solid #949494"
          />
          <InputRightAddon p={0} border="none">
            <Button
              size="sm"
              borderLeftRadius={0}
              borderRightRadius={3.3}
              border="1px solid #949494"
            >
              Search
            </Button>
          </InputRightAddon>
        </InputGroup>
        {/* BOTÕES LATERAIS */}
        <Button
          breakpoint="(min-width: 481px)"
          leftIcon={<MdFavoriteBorder />}
          variant="ghost"
          w="16rem"
        >
          Favoritos
        </Button>
        <Button
          breakpoint="(min-width: 481px)"
          leftIcon={<MdAddShoppingCart />}
          variant="ghost"
          w="16rem"
        >
          Carrinho
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
