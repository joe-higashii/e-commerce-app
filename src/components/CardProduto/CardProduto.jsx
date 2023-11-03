import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, IconButton} from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom';

const CardProduto = ({ nome, imagem, resumo, preco, id }) => {
  return (
    <Card w='300px' h='450px' >
      <CardBody>
        <Image
          src={imagem}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
          boxSize='150px'
        />
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
          <IconButton ml={5} icon={<MdAddShoppingCart />} variant='outline' colorScheme='purple'  ></IconButton>

        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardProduto;