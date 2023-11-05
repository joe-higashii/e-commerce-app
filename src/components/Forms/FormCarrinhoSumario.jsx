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
import { UserContext } from "../../context/UserContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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

  const finalizarCompra = async () => {
    try {
      const novoPedido = {
        valorTotal: calcularValorTotal(carrinhoUsuario),
        idUser: user.id,
        itens: carrinhoUsuario.map((produto) => ({
          idProduto: produto.id,
          quantidade: produto.quantidade,
        })),
      };

      await Promise.all(
        carrinhoUsuario.map(async (produto) => {
          try {
            const produtoNoBancoDeDados = await api.get(`/produtos/${produto.id}`);
            const quantidadeAtualizada = produtoNoBancoDeDados.data.quantidade - produto.quantidade;
            
            await api.patch(`/produtos/${produto.id}`, {
              quantidade: quantidadeAtualizada,
            });
            
            console.log(`Quantidade do produto ${produto.id} atualizada para ${quantidadeAtualizada}`);
          } catch (error) {
            console.error(`Erro ao atualizar quantidade do produto ${produto.id}:`, error);
          }
        })
      );

      const response = await api.post("/pedidos", novoPedido);
      console.log("Pedido finalizado com sucesso:", response.data);

      setUser((prevUser) => ({
        ...prevUser,
        carrinhoUsuario: [],
      }));

      await api.patch(`/users/${user.id}`, {
        carrinhoUsuario: [],
      });

      console.log("Carrinho esvaziado no servidor");
    } catch (error) {
      console.error("Erro ao finalizar compra:", error);
    }
    navigate('/pedidos')
  };

  const calcularValorTotal = (produtos) => {
    return produtos.reduce((total, produto) => {
      return total + produto.preco * produto.quantidade;
    }, 0);
  };

  const valorTotalDoCarrinho = calcularValorTotal(carrinhoUsuario);

  const handleContinuarComprando = () => {
    navigate('/lista/produtos')
  }

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Sumário do Pedido</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={`R$ ${valorTotalDoCarrinho.toFixed(2)}`} />
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
          {`R$ ${valorTotalDoCarrinho.toFixed(2)}`}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        onClick={finalizarCompra}
      >
        FINALIZAR COMPRA
      </Button>
      <Button
        variant={"outline"}
        colorScheme="blue"
        size="lg"
        fontSize="md"
        leftIcon={<FaArrowLeft />}
        onClick={handleContinuarComprando}
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
