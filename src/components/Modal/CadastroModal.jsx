import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,

} from '@chakra-ui/react'

function CadastroModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button mt={4} onClick={onOpen}>
                Cadastrar
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>

                        <FormControl>
                            <FormLabel>Nome Completo</FormLabel>
                            <Input placeholder='Digite o seu nome completo' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='Digite o seu email' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" placeholder='Digite sua senha' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Repetir Senha</FormLabel>
                            <Input type="password" placeholder='Digite sua senha' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Cadastrar
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default CadastroModal
