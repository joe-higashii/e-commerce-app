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
  Flex,
  useToast 
} from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdicionarAosFavoritosToast from "../Toast/AdicionarAosFavoritosToast";
import AdicionarAoCarrinhoToast from "../Toast/AdicionarAoCarrinhoToast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const CardProduto = ({ nome, imagem, resumo, preco, id, favorito }) => {
  const [isFavorito, setIsFavorito] = useState(favorito);
  const produto = { nome, imagem, resumo, preco, id, favorito };
  const navigate = useNavigate();
  const { carrinhoUsuario, adicionarProdutoAoCarrinho } = useContext(UserContext);

  const favoritar = () => {
    setIsFavorito(!isFavorito);
  };

  const handleComprarProduto = () => {
    adicionarProdutoAoCarrinho(produto);
    navigate('/carrinho')
  };

  return (
    <Card w="300px" h="500px">
      <CardBody>
        <Flex justifyContent={'center'}>
          <Image
            src={imagem}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            boxSize="150px"
            fit="contain"
          />
        </Flex>
        <Stack mt="6" spacing="3">
          <Flex justifyContent={'space-around'} alignItems={'center'} gap={'1rem'}>
            <Heading size="md">{nome}</Heading>
            <AdicionarAosFavoritosToast produtoId={produto.id} favorito={produto.favorito} produto={produto} />
          </Flex>
          <Text textAlign="left">{resumo}</Text>
          <Text as="b" fontSize="2xl">
            R${preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2" justifyContent={'space-evenly'}>
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
