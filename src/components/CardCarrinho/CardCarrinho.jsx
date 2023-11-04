import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../api/api"
import { Box, Heading, Button, Text, Image, Grid, GridItem, Card } from '@chakra-ui/react'
import { Input } from "postcss"


const CardCarrinho = () => {
    const [produto, setProduto] = useState({})
    const { id } = useParams()

    const getProduto = async () => {
        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data)
    }
    useEffect(() => {
        getProduto()
    }, [])

    function HookUsage() {
        const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
            useNumberInput({
                step: 1,
                defaultValue: 1,
                min: 1,
                max: 6,
                precision: 0,
            })

        const inc = getIncrementButtonProps()
        const dec = getDecrementButtonProps()
        const input = getInputProps()

        return (
            <HStack maxW='140px'>
                <Button {...dec}>-</Button>
                <Input {...input} />
                <Button {...inc}>+</Button>
            </HStack>
        )
    }

    return (
        <>
            <Card w='600px' h='100px' >
                <Grid templateColumns='repeat(2, 1fr)' gap={2}>
                    <GridItem w='100%' h='20' display="flex" alignItems="center">
                        <GridItem>
                            <Image
                                objectFit='cover'
                                maxW={{ base: '90%', sm: '30px' }}
                                src={produto.imagem}
                                alt={produto.nome}
                            />
                        </GridItem>
                        <GridItem>
                            <div>
                                <Heading size='md' textAlign='left' fontSize='sm'>
                                    {produto.nome}
                                </Heading>
                                <Text textAlign='left' fontSize='sm'>
                                    {produto.resumo}
                                </Text>
                            </div>
                        </GridItem>
                    </GridItem>
                    <GridItem w='100%' h='20'></GridItem>
                </Grid>
            </Card>
        </>
    )
}
export default CardCarrinho