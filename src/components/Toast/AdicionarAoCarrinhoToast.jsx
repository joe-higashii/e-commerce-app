import { Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

function AdicionarAoCarrinhoToast() {
    const toast = useToast()
    return (
      <Button
        onClick={() => {
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => reject(100), 5000)
          })
  
          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: { title: 'Promise resolvida', description: 'Produto adicionado com sucesso!' },
            error: { title: 'Promise rejeitada', description: 'Produto fora de estoque' },
            loading: { title: 'Promise pendente', description: 'Adicionando ao Carrinho' },
        })
      }}
      >
        Adicionar ao Carrinho
      </Button>
    )
  }

export default AdicionarAoCarrinhoToast