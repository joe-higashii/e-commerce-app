import React from 'react'
import {
    Accordion ,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'
import './AccordionDesc.css'

const AccordionDesc = ({descricao}) => {
    return (
        <Accordion w={'100%'} defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        DESCRIÇÃO DO PRODUTO
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel className='accordion-desc' pb={4}>
    <div dangerouslySetInnerHTML={{ __html: descricao }} />
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    )
}
export default AccordionDesc
