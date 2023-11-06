import React, { useContext, useEffect } from "react";
import NavBar from "../../components/Navbar/NavBar.jsx";
import FinalizarCompraStepper from "../../components/Stepper/FinalizarCompraStepper";
import {
  Grid,
  GridItem,
  Input,
  Text,
  Flex,
  Button,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Tab,
} from "@chakra-ui/react";
import { MdRemoveShoppingCart, MdAirportShuttle } from "react-icons/md";
import FormCarrinhoSumario from "../../components/Forms/FormCarrinhoSumario";
import Footer from "../../components/Footer/Footer";
import { UserContext } from "../../context/UserContext.jsx";
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho.jsx";
import CadastroModal from "../../components/Modal/CadastroModal.jsx";

function Carrinho() {
  const { user, carrinhoUsuario, setCarrinhoUsuario, adicionarProdutoAoCarrinho } = useContext(UserContext);
  
  useEffect(() => {
    const getProdutosDoCarrinho = async () => {
      try {
        const response = await api.get(`/users/${user.id}`);
        const carrinhoDoBanco = response.data.carrinhoUsuario || [];
        setCarrinhoUsuario(carrinhoDoBanco);
      } catch (error) {
        console.error("Erro ao carregar produtos do carrinho do usuário", error);
      }
    };

    getProdutosDoCarrinho();
  }, [user.id, setCarrinhoUsuario]);

  return (
    <>
      <NavBar />
      <br />
      <FinalizarCompraStepper indexAtual={0} />
      <Tabs>
        <TabList display={"none"}>
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
              templateRows="repeat(5, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
              padding={"1rem"}
            >
              {/* Produtos */}
              <GridItem
                rowSpan={4}
                colSpan={3}
                padding={"1rem"}
                border={"1px solid #D9D9D9"}
                borderRadius={"12px"}
              >
                <Flex
                  flexDirection={"column"}
                  alignItems={"flex-start"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize="xl" fontWeight="bold">
                    PRODUTOS DO CARRINHO
                  </Text>
                  {carrinhoUsuario.map((produto) => (
                    <CardCarrinho
                      key={produto.id}
                      nome={produto.nome}
                      imagem={produto.imagem}
                      preco={produto.preco}
                      quantidade={produto.quantidade}
                      id={produto.id}
                      resumo={produto.resumo}
                    />
                    
                  ))}
                  
                </Flex>
                <hr />
              </GridItem>
              {/* Resumo */}
              <GridItem
                rowSpan={5}
                colSpan={2}
                borderRadius={"12px"}
              >
                <FormCarrinhoSumario></FormCarrinhoSumario>
              </GridItem>
              {/* Frete */}
              <GridItem
                maxH={'6rem'}
                colSpan={3}
                border={"1px solid #D9D9D9"}
                padding={"1rem"}
                borderRadius={"12px"}
              >
                <Flex
                  flexDirection={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mb={"1rem"}
                >
                  <Text leftIcon={<MdAirportShuttle />}>
                    <strong strong>FRETE: </strong>
                  </Text>
                  <Input
                    ml={"1rem"}
                    type="number"
                    placeholder="DIGITE SEU CEP..."
                    border="1px solid #949494"
                  />
                  <Button ml={"1rem"} w={"30%"} colorScheme="blue">
                    PROCURAR
                  </Button>
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
  );
}

export default Carrinho;
