import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    Flex
} from '@chakra-ui/react'
import CustomEditor from '../Forms/CustomEditor'
import { Button } from "@chakra-ui/react";

const AccordionComentario = ({ objProduto }) => {

    //REFERÊNCIA 
    //To fix this error, you need to check if the objProduto.produto object is defined and has a comentarios property before trying to access it. You can do this by using an optional chaining operator (?.)

    const comentarios = objProduto.produto.comentarios || [];

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
                    <Button mt={'.7rem'} variant={'outline'} colorScheme="purple">Enviar Comentário</Button>
                    {
                        Array.isArray(comentarios) &&
                        comentarios.map(({comentario, idUser, nota}) => {
                            console.log(comentario);
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
        </Accordion>
    )
}
export default AccordionComentario
