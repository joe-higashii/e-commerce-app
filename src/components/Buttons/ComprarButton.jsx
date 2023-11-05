import React, { useContext } from "react";
import { IconButton, Button } from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const ComprarButton = ({ produto }) => {
  const { adicionarProdutoAoCarrinho } = useContext(UserContext);
  const navigate = useNavigate();

  const handleComprarProduto = () => {
    adicionarProdutoAoCarrinho(produto);
  };

  return (
    <Button
      ml={2}
      fontWeight="bold"
      w="100px"
      variant="solid"
      colorScheme="purple"
      onClick={handleComprarProduto}
    >
      COMPRAR
    </Button>
  );
};

export default ComprarButton;
