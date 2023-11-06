import React, { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, IconButton, Grid, GridItem, HStack, useNumberInput, Input } from '@chakra-ui/react';
import { UserContext } from '../../context/UserContext';
import SeletorQuantidade from '../SeletorQuantidade/SeletorQuantidade';
import { FaTrashAlt } from 'react-icons/fa';
import { api } from '../../api/api';


const CardCarrinhoItem = ({ nome, imagem, preco, quantidade, resumo, id }) => {
  const prod = { nome, imagem, preco, quantidade, resumo, id };
  const [produto, setProduto] = useState({});
  const { carrinhoUsuario, user, setUser } = useContext(UserContext);
  const getProduto = async () => {
    const response = await api.get(`/produtos/${id}`);
    setProduto(response.data);
  };

  useEffect(() => {
    getProduto();
  }, []);

  const handleRetirarDoCarrinho = async () => {
    const novoCarrinho = carrinhoUsuario.filter((produto) => produto.id !== id);

  setUser((prevUser) => ({
    ...prevUser,
    carrinhoUsuario: novoCarrinho,
  }));
    await api.patch(`/users/${user.id}`, {
      carrinhoUsuario: novoCarrinho,
    });
  }

  return (
    <Card style={{ marginBottom: "10px", maxWidth: '100%', display: 'flex', alignItems: 'center', height: '80px' }}>
    <Grid
      templateColumns={['1fr', '1fr', '1fr 2fr 3fr 1fr auto']}
      gap={4}
      alignItems="center"
      
    >
      <GridItem alignSelf="center" justifySelf="center">
      <Image
        objectFit="cover"
        maxW={['100%', '100%', { base: '90%', sm: '30px' }]}
        ml={5} 
        src={imagem}
        alt={nome}
      />
      </GridItem>
  
      <GridItem>
        <Heading size="md" textAlign="left" fontSize="sm">
          {nome}
        </Heading>
      </GridItem>
  
      <GridItem>
        <SeletorQuantidade quantidade={produto.quantidade}totalitens={quantidade}/>
      </GridItem>
  
      <GridItem>
        <Text as="b" fontSize="sm">
          R${preco}
        </Text>
      </GridItem>
  
      <GridItem>
        <IconButton
          colorScheme="grey"
          aria-label="Retirar Produto"
          size="lg"
          fontSize="md"
          variant={"ghost"}
          onClick={ handleRetirarDoCarrinho}
          icon={<FaTrashAlt />}
          width="2rem"
        ></IconButton>
      </GridItem>
    </Grid>
  </Card>
  );
};

export default CardCarrinhoItem;
