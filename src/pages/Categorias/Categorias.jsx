import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import { api } from "../../api/api";

function Categorias() {
  const [categorias, setCategorias] = useState([]);
  const { id } = useParams();

  const obterCagetoria = async () => {
    const response = await api.get(`/categorias${id}`);
    setCategorias(response.data);
  };

  useEffect(() => {
    obterCagetoria();
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
      >
        {categorias.map(({ nome, descricao, id }) => (
          <Categorias nome={nome} descricao={descricao} id={id} />
        ))}
      </Grid>
    </>
  );
}

export default Categorias;
