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
        <GridItem h={'700px'} rowSpan={2} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto1</GridItem>
        <GridItem rowSpan={1} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto2</GridItem>
        <GridItem rowSpan={1} colSpan={1} padding={'1rem'} border={'1px solid #D9D9D9'} borderRadius={'12px'} >Produto3</GridItem>

      </Grid>
      <Footer />
    </>
  )
}

export default Home