import React, { useState } from "react";
import { Button, IconButton, useToast } from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeart } from 'react-icons/fa';

function AdicionarAoCarrinhoToast(nome) {
  const [favoritos, setFavoritos] = useState([]);
  const [ativo, setAtivo] = useState(false);
  const toast = useToast();

  return (
    <IconButton
      onClick={() => {
        const item = { nome };

        const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(100), 1500);
          });
    
          toast.promise(examplePromise, {
            success: {
              title: "Promise resolvida",
              description: `Produto adicionado com sucesso!`,
            },
            error: {
              title: "Promise rejeitada",
              description: "Produto fora de estoque",
            },
            loading: {
              title: "Promise pendente",
              description: "Adicionando ao Carrinho",
            },
          });
    
        if (ativo) {
          const novosFavoritos = favoritos.filter((favorito) => favorito.nome !== item.nome);
          setFavoritos(novosFavoritos);
        } else {
          setFavoritos([...favoritos, item]);
        }

        setAtivo(!ativo);
      }}
      ml={5}
      icon={<FaHeart color={ativo ? "red" : "gray"} />}
      variant="outline"
      colorScheme="red"
    />
  );
}

export default AdicionarAoCarrinhoToast;
