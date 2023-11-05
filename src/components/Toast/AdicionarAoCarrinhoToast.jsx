import React from "react";
import { useToast } from "@chakra-ui/react";


function AdicionarAoCarrinhoToast() {
  const toast = useToast();
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
}

export default AdicionarAoCarrinhoToast;
