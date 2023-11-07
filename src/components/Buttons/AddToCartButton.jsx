import React, { useContext } from 'react';
import { IconButton } from '@chakra-ui/react';
import { MdAddShoppingCart } from 'react-icons/md';
import { UserContext } from '../../context/UserContext';

const AddToCartButton = ({ produto }) => {
  const { adicionarProdutoAoCarrinho } = useContext(UserContext);

  const handleAdicionarAoCarrinho = () => {
    adicionarProdutoAoCarrinho(produto);
  };

  return (
    <IconButton
      ml={5}
      icon={<MdAddShoppingCart />}
      variant="outline"
      colorScheme="purple"
      onClick={handleAdicionarAoCarrinho}
    />
  );
};

export default AddToCartButton;
