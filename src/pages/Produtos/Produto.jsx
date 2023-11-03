import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../api/api"
import { Card, CardBody, CardFooter, Stack, Heading, Button, Text, Image } from '@chakra-ui/react'
import NavBar from "../../components/Navbar/Navbar"
import AccordionDesc from "../../components/Accordion/AccordionDesc"


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
            <NavBar />
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                maxW={{ base: '100%', sm: '100%' }}
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
                        <Text as='b' fontSize='2xl'>
                            R${produto.preco}
                        </Text>
                        <Button variant='solid' colorScheme='purple'>
                            Comprar
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
            <br />
            <AccordionDesc descricao={produto.descricao} />
           
        </>
    )
}
export default Produto