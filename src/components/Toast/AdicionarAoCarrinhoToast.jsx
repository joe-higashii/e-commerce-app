import React, { useState } from "react";
import { Button, IconButton, useToast } from "@chakra-ui/react";
import { MdAddShoppingCart } from "react-icons/md";

function AdicionarAoCarrinhoToast(nome) {
    const toast = useToast()
    return (
        <IconButton
          onClick={() => {
            // Create an example promise that resolves in 5s
            const examplePromise = new Promise((resolve, reject) => {
              setTimeout(() => resolve(100), 1500)
            })

            // Will display the loading toast until the promise is either resolved
            // or rejected.
            toast.promise(examplePromise, {
              success: { title: 'Promise resolvida', description: `Produto adicionado com sucesso!` },
              error: { title: 'Promise rejeitada', description: 'Produto fora de estoque' },
              loading: { title: 'Promise pendente', description: 'Adicionando ao Carrinho' },
            })
          }}
          ml={5}
          icon={<MdAddShoppingCart />}
          variant='outline'
          colorScheme='purple'
        />
    )
}

export default AdicionarAoCarrinhoToast