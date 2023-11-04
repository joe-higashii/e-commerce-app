import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, IconButton } from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import AdicionarAoCarrinhoToast from '../Toast/AdicionarAoCarrinhoToast';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CardProduto = ({ nome, imagem, resumo, preco, id, favorito }) => {
  const [isFavorito, setIsFavorito] = useState(favorito);

  const favoritar = () => {
    setIsFavorito(!isFavorito);
  };

  return (
    <Card w='300px' h='450px' >
      <CardBody>
        <Image
          src={imagem}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          boxSize='150px'
        />
        {/* {isFavorito ? <AiFillHeart color="#b90000" size={25} onClick={favoritar} /> : <AiOutlineHeart size={25} onClick={favoritar} />}         */}
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nome}</Heading>
          <Text  textAlign="left">
            {resumo}
          </Text>
          <Text as='b' fontSize='2xl'>
            R${preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='purple'>
            Comprar
          </Button>
          <Button variant='outline' colorScheme='purple' as={Link} to={`/produto/${id}`}>
            Detalhes
          </Button>
          <AdicionarAoCarrinhoToast />
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardProduto;