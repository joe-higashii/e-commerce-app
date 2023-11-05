import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text
} from '@chakra-ui/react'
import CustomEditor from '../Forms/CustomEditor'

const AccordionComentario = () => {
    return (
        <Accordion mt={'3rem'} w={'100%'} defaultIndex={[0]} allowMultiple>
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
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}
export default AccordionComentario
