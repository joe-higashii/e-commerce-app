import { Search2Icon } from "@chakra-ui/icons";
import {
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightAddon,
    Select,
    Stack,
    Show,
    Flex,
    IconButton 
} from "@chakra-ui/react";
import { MdFavoriteBorder, MdAddShoppingCart } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react"
import CarrinhoDrawer from "../Drawer/CarrinhoDrawer";
import { Link } from "react-router-dom";


export const NavBar = () => {
    const { nome, idUser } = useContext(UserContext)

    return (
        <>
            <Flex display={{base: 'block', xl:'flex'}} wrap={'nowrap'} spacing={4} direction="row" align="center" m="1rem" justifyContent={"space-between"} gap={'1rem'}>
                <Button as={Link} to={`/lista/produtos`} variant="ghost" w="xs" >Todos os Produtos</Button>
                <Select variant='ghost' placeholder='Categorias' w="lg">
                    <option value='hardware'>Hardware</option>
                    <option value='perifericos'>Perifericos</option>
                    <option value='carburador'>Carburador de Santana</option>
                </Select>
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
                <p> Olá {nome} {idUser}</p>
                <Link to='/pedidos'>Teste</Link>
                <Button breakpoint='(min-width: 481px)' leftIcon={<MdFavoriteBorder />} variant="ghost" w="16rem" >Favoritos</Button>
                {/* <Button breakpoint='(min-width: 481px)' leftIcon={<MdAddShoppingCart />} variant="ghost" w="16rem" >Carrinho</Button> */}
                <CarrinhoDrawer/>
            </Flex>
                {/* NAVBAR MOBILE LATERAIS MOBILE*/}
                {/* <Show breakpoint ='(max-width: 480px)'>
                    <IconButton  aria-label='Favoritos' icon={<MdFavoriteBorder />} />
                    <IconButton  aria-label='Carrinho' icon={<MdAddShoppingCart />} />
                </Show> */}
        </>
    )
}

export default NavBar