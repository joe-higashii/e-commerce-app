import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
  const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
      <Flex justify="space-between" fontSize="sm">
        <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
          {label}
        </Text>
        {value ? <Text fontWeight="medium">{value}</Text> : children}
      </Flex>
    )
  }
  
  export const FormCarrinhoSumario = () => {
    return (
      <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
        <Heading size="md">Sumário do Pedido</Heading>
  
        <Stack spacing="6">
          <OrderSummaryItem label="Subtotal" value={'R$597'} />
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
              {'R$597'}
            </Text>
          </Flex>
        </Stack>
        <Button colorScheme="blue" size="lg" fontSize="md" rightIcon={<FaArrowRight />}>
          FINALIZAR COMPRA
        </Button>
        <Button variant={'outline'} colorScheme="blue" size="lg" fontSize="md" leftIcon={<FaArrowLeft />}>
          CONTINUAR COMPRANDO
        </Button>
      </Stack>
    )
  }

  export default FormCarrinhoSumario