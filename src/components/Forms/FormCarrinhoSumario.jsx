import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { UserContext } from '../../context/UserContext';
import { api } from "../../api/api";

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const FormCarrinhoSumario = () => {
  const { carrinhoUsuario, user, setUser } = useContext(UserContext);
  
  const handleEsvaziarCarrinho = async () => {
    setUser((prevUser) => ({
      ...prevUser,
      carrinhoUsuario: [],
    }));

    try {
      await api.patch(`/users/${user.id}`, {
        carrinhoUsuario: [],
      });
      console.log("Carrinho esvaziado no servidor");
    } catch (error) {
      console.error("Erro ao esvaziar carrinho no servidor", error);
    }
  };

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Sumário do Pedido</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={"R$597"} />
        <OrderSummaryItem label="Frete">
          <Link href="#" textDecor="underline">
            Calcular Frete
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Cupom de Desconto">
          <Link href="#" textDecor="underline">
            Adicionar Cupom
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            {"R$597"}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
      >
        FINALIZAR COMPRA
      </Button>
      <Button
        variant={"outline"}
        colorScheme="blue"
        size="lg"
        fontSize="md"
        leftIcon={<FaArrowLeft />}
      >
        CONTINUAR COMPRANDO
      </Button>
      <Button
        colorScheme="red"
        size="lg"
        fontSize="md"
        onClick={handleEsvaziarCarrinho}
      >
        ESVAZIAR CARRINHO
      </Button>
    </Stack>
  );
};

export default FormCarrinhoSumario;
