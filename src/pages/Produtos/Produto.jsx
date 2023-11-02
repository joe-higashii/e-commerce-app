import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../api/api"
import { Card, CardBody, CardFooter, Stack, Heading, Button, Text, Image } from '@chakra-ui/react'

const Produto = () => {
    const [produto, setProduto] = useState({})
    const { id } = useParams()

    const getProduto = async () => {
        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data)
    }
    useEffect(() => {
        getProduto()
    }, [])
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={produto.imagem}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{produto.nome}</Heading>

                        <Text py='2'>
                            {produto.resumo}
                        </Text>
                    </CardBody>

                    <CardFooter>
                        <Button variant='solid' colorScheme='purple'>
                            Comprar
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </>
    )
}
export default Produto