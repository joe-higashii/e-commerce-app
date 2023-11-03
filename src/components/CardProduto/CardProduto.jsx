import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';


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
          <Text>
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
          <Button variant='outline' colorScheme='purple'>
            Detalhes
          </Button>

        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CardProduto;