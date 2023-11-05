import { useEffect, useState, useContext } from "react"
import { api } from "../../api/api"
import NavBar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../context/UserContext";
import CardProduto from "../../components/CardProduto/CardProduto"
import { Grid, GridItem } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Table,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'

const Pedidos = () => {
    const { nome, idUser } = useContext(UserContext)
    const [pedidos, setPedidos] = useState([])
    const [produtos, setProdutos] = useState([])

    const getPedidos = async () => {
        try {
          const response = await api.get('/pedidos');
          if (response.status === 200) {
            const aux = response.data.filter((pedido) => pedido.idUser === idUser);
            setPedidos(aux);
          } else {
            console.error("Erro ao obter a lista de pedidos.");
          }
        } catch (error) {
          console.error("Erro ao obter a lista de pedidos:", error);
        }
    };      

    const getProdutos = async () => {
        const response = await api.get('/produtos')
        setProdutos(response.data)
        console.log(produtos)
    }

    useEffect(() => {
        getPedidos()
        getProdutos()
    }, [])

    return (
        <div style={{ height:'100vh' }}>
        <NavBar />
        <Grid
            templateRows={`repeat(${pedidos.length}, 1fr)`}
            gap={4}
            >
            {pedidos.map(({ id, valorTotal, idUser, itens }) => (
                    <div key={id}>                   
                        <Accordion defaultIndex={[1]} allowMultiple>
                            <AccordionItem>
                                <h2>
                                <AccordionButton style={{ height: '60px', display: 'flex' }} >
                                <Box as="span" flex="1" textAlign="left">
                                    Pedido Nº {id}
                                </Box>
                                <Box as="span" flex="1" textAlign="center">
                                    Forma de pagamento:
                                </Box>
                                <Box as="span" flex="1" textAlign="right">
                                    Detalhes do pedido
                                </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                {itens.map(({ idProduto, quantidade }) => {                      
                                    const produto = produtos.find((produto) => produto.id === idProduto);

                                    if (produto) {
                                        return (
                                            <Grid
                                                h='150px'
                                                templateRows='repeat(2, 1fr)'
                                                templateColumns='repeat(5, 1fr)'
                                                marginBottom='10px'
                                                gap={3}
                                                >
                                                <GridItem rowSpan={2} colSpan={1}>
                                                    <img
                                                    src={produto.imgurl}
                                                    alt='Green double couch with wooden legs'
                                                    borderRadius='sm'
                                                    width={'80px'}
                                                    />
                                                </GridItem>
                                                <GridItem colSpan={4} textAlign="left">
                                                    <h2>{produto.nome}</h2>
                                                </GridItem>
                                                <GridItem colSpan={4} textAlign="right">
                                                    <h2>R$ {produto.preco}</h2>
                                                </GridItem>
                                            </Grid>                                           
                                        );
                                    }
                                    return null;
                                })} 
                                    <TableContainer>
                                    <Table>
                                        <Tbody>
                                            <Tr>
                                                <Td>TOTAL PRODUTO(S)</Td>
                                                <Td textAlign={'right'}>R$ {valorTotal}</Td>
                                            </Tr>
                                            <Tr>
                                                <Td>DESCONTO</Td>
                                                <Td textAlign={'right'}>R$ 0</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                    </TableContainer>   
                                </AccordionPanel>
                            </AccordionItem>
                            </Accordion>
                    </div>
                ))}
        </Grid>
        <Footer />
        </div>
    )
}

export default Pedidos