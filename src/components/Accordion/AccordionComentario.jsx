import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Flex,
    IconButton
} from '@chakra-ui/react'
import CustomEditor from '../Forms/CustomEditor'
import { Button } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { async } from "q";
import { api } from "../../api/api";


const AccordionComentario = ({ objProduto }) => {

    //REFERÊNCIA 
    //To fix this error, you need to check if the objProduto.produto object is defined and has a comentarios property before trying to access it. You can do this by using an optional chaining operator (?.)
    // console.log(objProduto.produto.id)
    const comentarios = objProduto.produto.comentarios || [];
    //produto = objProduto.produto
    //montar estrelas
    const quantidadeEstrelas = 5;
    const notaEstrela = 0
    const arrayEstrelas = Array.from({ length: quantidadeEstrelas }, (_, index) => {
        return index < notaEstrela ? "gold" : "gray";
    });


    return (
        <Accordion mt={'3rem'} w={'100%'} defaultIndex={[1]} allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            COMENTÁRIOS
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel className='accordion-desc' pb={4}>
                    <Text fontSize={'1.2rem'} fontWeight={'bold'}>Deixe seu comentário:</Text>
                    <CustomEditor />
                    {arrayEstrelas.map((cor, index) => (
                        <IconButton size={'xs'}
                            key={index}
                            mr={'.5rem'}
                            mt={'.5rem'}
                            icon={<AiFillStar color={cor} />}
                            variant="outline"
                            colorScheme="yellow"
                        />
                    ))}

                    <Flex>
                        <Button mt={'.7rem'}
                            variant={'outline'}
                            colorScheme="purple"
                            onClick={async () => {
                                console.log(`comentario: ${comentarios[1]}, produto: ${objProduto.produto.id}`)
                                //console.log(comentarios[1])
                                let novoComentario;

                                // const comentarioExistente = objProduto.produto.comentario.find((item) => item.id === produto.id);
                                
                                if (objProduto.produto) {
                                    // Adicionar um novo comentário ao produto
                                    objProduto.produto.comentarios.push({
                                        idUser: 1,
                                        comentario: 'VAI FICAR TUDO BEM',
                                        nota: 2
                                    });

                                    try {
                                        await api.patch(`/produtos/${objProduto.produto.id}`, {
                                            comentarios: objProduto.produto.comentarios
                                        });
                                    } catch (error) {
                                        console.error(`Erro ao criar o comentário do produto ${objProduto.produto.id}`, error);
                                    }
                                }
                            }}

                        >Enviar Comentário
                        </Button>
                    </Flex>
                    {
                        Array.isArray(comentarios) &&
                        comentarios.map(({ comentario, idUser, nota }) => {
                            return (
                                <Flex gap={'.3rem'} mt={'2rem'} padding={'1rem'} w={'60%'} borderRadius={'12px'} border={'1px solid #D9D9D9'} flexDir={"column"}>
                                    <Text fontSize={'1.2rem'} fontWeight={"bold"}>Usuário: {idUser}</Text>

                                    <Text>Nota: {nota} estrela</Text>
                                    <Text>{comentario}</Text>
                                </Flex>
                            );
                        })
                    }

                </AccordionPanel>
            </AccordionItem>
        </Accordion >
    )
}
export default AccordionComentario
