import { Search2Icon } from "@chakra-ui/icons";
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    Select,
    Stack
} from "@chakra-ui/react";
import { MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";

export const NavBar = () => {
    return (
        <>
            <Stack spacing={4} direction="row" align="center" m="1rem">
                <Button variant="ghost" w="xs" >Todos os Produtos</Button>
                <Select variant='ghost' placeholder='Categorias' w="xs" />
                {/* SEARCHBAR */}
                <InputGroup borderRadius={5} size="sm">
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="gray.600" />}
                    />
                    <Input type="text" placeholder="Search..." border="1px solid #949494" />
                    <InputRightAddon
                        p={0}
                        border="none"
                    >
                        <Button size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
                            Search
                        </Button>
                    </InputRightAddon>
                </InputGroup>
                {/* BOTÕES LATERAIS */}
                <Button leftIcon={<MdFavoriteBorder />} variant="ghost" w="xs" >Favoritos</Button>
                <Button leftIcon={<MdAddShoppingCart />} variant="ghost" w="xs" >Carrinho</Button>
            </Stack>
        </>
    )
}

export default NavBar