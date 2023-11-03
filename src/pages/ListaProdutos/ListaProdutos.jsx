import { useEffect, useState } from "react"
import CardProduto from "../../components/CardProduto/CardProduto"
import { api } from "../../api/api"
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from "../../components/Navbar/Navbar"

const ListaProdutos = () => {
    const [produtos, setProdutos] = useState([])

    const getProdutos = async () => {
        const response = await api.get('/produtos')
        setProdutos(response.data)
    }

    useEffect(() => {
        getProdutos()
    }, [])

    return (
        <>
        <NavBar />
        <Grid
            templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={4}
            p={4}
        >
            {produtos.map(
                ({ nome, imagem, resumo, preco, id }) => (
                    <CardProduto
                        nome={nome}
                        imagem={imagem}
                        resumo={resumo}
                        preco={preco}
                        id={id}
                    />
                )
            )}
        </Grid>
        </>
    )
}
export default ListaProdutos