import React from 'react'
import { Grid, GridItem, Input, Text, Flex, Button, Tabs, TabList, TabPanel, TabPanels, Tab, LinkOverlay } from '@chakra-ui/react'
import NavBar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
      <NavBar />

      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={4}
        padding={'1rem'}
      >
        <GridItem backgroundSize={'cover'} backgroundImage={'https://img.freepik.com/vetores-premium/detalhado-laptop-mockup-vertical-banner-design-tela-realista-vista-lateral-sobre-fundo-escuro-ilustracao-vetorial_541075-946.jpg?w=2000'} h={'700px'} rowSpan={2} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto1</GridItem>
        <GridItem backgroundSize={'cover'} backgroundRepeat={'no-repeat'} backgroundImage={'https://www.zotac.com/download/files/styles/org/public/news/images/vga_keyart_banner_1920-580_15.jpg?itok=4rtDIKz0'} rowSpan={1} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto2</GridItem>
        <GridItem backgroundImage={'https://images.anandtech.com/doci/15804/Banner_1920x1080_678x452.jpg'} rowSpan={1} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto3</GridItem>

      </Grid>
      <Footer />
    </>
  )
}

export default Home