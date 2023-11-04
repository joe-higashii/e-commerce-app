import React from 'react'
import NavBar from '../../components/Navbar/Navbar'
import FinalizarCompraStepper from '../../components/Stepper/FinalizarCompraStepper'
import { Grid, GridItem, Input, Text, Flex, Button, Tabs, TabList, TabPanel, TabPanels, Tab } from '@chakra-ui/react'
import { MdRemoveShoppingCart, MdAirportShuttle } from "react-icons/md";
import FormCarrinhoSumario from '../../components/Forms/FormCarrinhoSumario';
import Footer from '../../components/Footer/Footer';

function Carrinho() {
    return (
        <>

            <NavBar />
            <br />
            <FinalizarCompraStepper />  
            <Tabs>
                <TabList display={'none'}>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                    <Tab>Three</Tab>
                    <Tab>Four</Tab>
                    <Tab>Five</Tab>
                </TabList>

                <TabPanels>
                    {/* PRIMEIRO PASSO VERIFICAR CARRINHO */}
                    <TabPanel>
                        <Grid
                            templateRows='repeat(5, 1fr)'
                            templateColumns='repeat(5, 1fr)'
                            gap={4}
                            padding={'1rem'}
                        >
                            {/* Produtos */}
                            <GridItem rowSpan={4} colSpan={3} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >
                                <Flex
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    mb={'1rem'}>
                                    <Text><strong strong>PRODUTOS DO CARRINHO</strong></Text>
                                    <Button colorScheme="red" variant={'outline'} leftIcon={<MdRemoveShoppingCart />}><strong strong>  REMOVER TODOS OS PRODUTOS</strong></Button>
                                </Flex>
                                <Flex>

                                </Flex>
                                <hr />

                            </GridItem>
                            {/* Resumo */}
                            <GridItem rowSpan={5} colSpan={2} border={'1px solid #D9D9D9'} borderRadius={'12px'} >
                                <FormCarrinhoSumario></FormCarrinhoSumario>
                            </GridItem>
                            {/* Frete */}
                            <GridItem colSpan={3} border={'1px solid #D9D9D9'} padding={'1rem'} borderRadius={'12px'} >
                                <Flex
                                    flexDirection={'row'}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                    mb={'1rem'}>
                                    <Text leftIcon={<MdAirportShuttle />}><strong strong>FRETE: </strong></Text>
                                    <Input ml={'1rem'} type="number" placeholder="DIGITE SEU CEP..." border="1px solid #949494" />
                                    <Button ml={'1rem'} w={'30%'} colorScheme="blue" >PROCURAR</Button>
                                </Flex>
                            </GridItem>
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Footer></Footer>
        </>
    )
}

export default Carrinho