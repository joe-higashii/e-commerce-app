import { useContext, useEffect, useState } from "react";
import CardProduto from "../../components/CardProduto/CardProduto";
import { api } from "../../api/api";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "../../components/NavBar/NavBar";
import { GeralContext } from "../../context/GeralContext";

const ListaProdutos = () => {
  const { produtos, setProdutos } = useContext(GeralContext);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const getProdutos = async () => {
    const response = await api.get("/produtos");
    setProdutos(response.data);
  };

  useEffect(() => {
    getProdutos();
  }, []);

  useEffect(() => {
    if (categoriaSelecionada) {
      const getProdutosPorCategoria = async () => {
        try {
          const response = await api.get(
            `/produtos?categoria=${categoriaSelecionada}`
          );
          setProdutos(response.data);
        } catch (error) {
          console.error("");
        }
      };

      getProdutosPorCategoria();
    } else {
      getProdutos();
    }
  }, [categoriaSelecionada]);

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
      >
        {produtos.map(({ nome, imagem, resumo, preco, id, categoria }) => (
          <CardProduto
            nome={nome}
            imagem={imagem}
            resumo={resumo}
            preco={preco}
            id={id}
            categoria={categoria}
          />
        ))}
      </Grid>
    </>
  );
};
export default ListaProdutos;
