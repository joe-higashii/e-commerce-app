import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { FaGitkraken } from "react-icons/fa";
import FormularioLogin from "../../components/FormularioLogin/FormularioLogin.jsx"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
      <FaGitkraken fontSize={'4rem'} ></FaGitkraken>
      <Text fontSize={"2rem"} fontWeight={'bold'}>
          <a href="" onClick={navigateHome}>
            <strong>KRAKEN</strong>
          </a>
        </Text>
        <Text fontSize={"1rem"}mb={'4rem'}>Beyond Reality</Text>
        <Flex mb={'300px'} flexDir={'column'} border={'1px solid black'} borderRadius={'12px'} padding={'2rem'}>
          <Text fontSize={'1.5rem'} fontWeight={'bold'} mb={'1rem'}>Entre com a sua conta</Text>
          <FormularioLogin />
        </Flex>

      </Flex>

    </>
  )
}