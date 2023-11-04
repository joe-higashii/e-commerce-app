import React, { useContext } from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, IconButton} from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const CardCarrinhoItem = ({ nome, imagem, preco, quantidade, id }) => {
  const produto = { nome, imagem, preco, id };
  const { carrinhoUsuario, adicionarProdutoAoCarrinho } =
  useContext(UserContext);

  return (
    <Card w='300px' h='450px' >
      <CardBody>
        <Image
          src={imagem}
          alt={nome}
          borderRadius='lg'
          boxSize='150px'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nome}</Heading>
          <Text fontSize='xl'>Quantidade: {quantidade}</Text>
          <Text as='b' fontSize='2xl'>
            R${preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='outline' colorScheme='purple' as={Link} to={`/produto/${id}`}>
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

export default CardCarrinhoItem;
