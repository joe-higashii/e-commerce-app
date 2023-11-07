import React, { useState } from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input
  } from '@chakra-ui/react'

  function CarrinhoDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Carrinho
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size={'md'}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Carrinho</DrawerHeader>
  
            <DrawerBody>
              <Input placeholder='Type here...' />
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='blue'>Comprar</Button>
              <Button colorScheme='blue'>Ver Carrinho</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default CarrinhoDrawer