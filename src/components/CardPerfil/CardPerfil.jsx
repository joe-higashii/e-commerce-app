import { Avatar, Grid, GridItem, Text } from "@chakra-ui/react"
import React from "react"
import { Navigate } from "react-router-dom";

const CardPerfil = () => {
    return (
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            maxH={'4rem'}
            gap={0.6}
        >
            <GridItem justifySelf={'center'} alignSelf={'center'} rowSpan={2} colSpan={2} >
                <Avatar size='xs' name='Lucas Caldas' src='https://bit.ly/dan-abramov' />
            </GridItem>
            <GridItem justifySelf={'center'} colSpan={1} >
                <Text fontSize={'.8rem'}>Olá, user</Text>
            </GridItem>
            <GridItem alignSelf={'center'} colSpan={1} >
                <Text fontSize={'.8rem'}>Pedidos | Sair</Text>
            </GridItem>
        </Grid>
    )
}

export default CardPerfil