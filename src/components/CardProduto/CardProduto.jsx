import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdicionarAoCarrinhoToast from "../Toast/AdicionarAoCarrinhoToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const CardProduto = ({ nome, imagem, resumo, preco, id, favorito }) => {
  const [isFavorito, setIsFavorito] = useState(favorito);
  const produto = { nome, imagem, resumo, preco, id };
  const navigate = useNavigate();
  const { carrinhoUsuario, adicionarProdutoAoCarrinho } =
    useContext(UserContext);

  const favoritar = () => {
    setIsFavorito(!isFavorito);
  };

  const handleComprarProduto = () => {
    adicionarProdutoAoCarrinho(produto);
    navigate('/carrinho')
  };

  return (
    <Card w="300px" h="450px">
      <CardBody>
        <Image
          src={imagem}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxSize="150px"
        />
        {/* {isFavorito ? <AiFillHeart color="#b90000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}         */}
        <Stack mt="6" spacing="3">
          <Heading size="md">{nome}</Heading>
          <Text textAlign="left">{resumo}</Text>
          <Text as="b" fontSize="2xl">
            R${preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme="purple"
            onClick={handleComprarProduto}
          >
            Comprar
          </Button>
          <Button
            variant="outline"
            colorScheme="purple"
            as={Link}
            to={`/produto/${id}`}
          >
            Detalhes
          </Button>
          <AdicionarAoCarrinhoToast />
          <IconButton
            ml={5}
            icon={<MdAddShoppingCart />}
            variant="outline"
            colorScheme="purple"
            onClick={() => adicionarProdutoAoCarrinho(produto)}
          />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default CardProduto;
