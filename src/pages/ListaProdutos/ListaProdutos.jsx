import { useContext, useEffect, useState } from "react";
import CardProduto from "../../components/CardProduto/CardProduto";
import { api } from "../../api/api";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../../components/Navbar/Navbar.jsx";
import { GeralContext } from "../../context/GeralContext";
import Footer from "../../components/Footer/Footer.jsx";

const ListaProdutos = () => {
  const { produtos, setProdutos } = useContext(GeralContext);

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <>
      <NavBar />
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
        p={4}
        minHeight={"100vh"}
      >
        {produtos.filter(produto => produto.quantidade >= 1).map(({ nome, imagem, resumo, preco, id, categoria, favoritos }) => (
          <CardProduto
            nome={nome}
            imagem={imagem}
            resumo={resumo}
            preco={preco} 
            id={id}
            categoria={categoria}
            favorito={favoritos}
          />
        ))}
      </Grid>
      <Footer />
    </>
  );
};
export default ListaProdutos;
