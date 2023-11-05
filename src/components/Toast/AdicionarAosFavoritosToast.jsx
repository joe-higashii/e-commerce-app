import React, { useState } from "react";
import { IconButton, useToast } from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa';
import { api } from "../../api/api";

const AdicionarAosFavoritosToast = ({ produtoId, favorito, produto }) => {
  // console.log(produtoId, favorito, produto)
  const toast = useToast();
  return (
    <IconButton
      onClick={async () => {
        console.log(`atual: ${favorito}, modificado ${!favorito}`)
        try {
          await api.patch(`/produtos/${produto.id}`, {
            favoritos: !favorito,
          });
          console.log(`produto ${produto.id} status de favorito atualizado para ${produto.favoritos}`);
        } catch (error) {
          console.error(`Erro ao atualizar o favorito do produto ${produto.id}, status atual: ${produto.favoritos}, status requisitado: ${!favorito}:`, error);
        }

        const favoritoPromisse = new Promise((resolve, reject) => {
          (favorito ? setTimeout(() => reject(100), 1500) : setTimeout(() => resolve(100), 1500));
        });

        //TOAST PROMISSE 
        toast.promise(favoritoPromisse, {
          success: {
            title: "Promise resolvida",
            description: `Produto adicionado aos Favoritos`,
          },
          error: {
            title: "Promise rejeitada",
            description: "Produto removido dos Favoritos",
          },
          loading: {
            title: "Promise pendente",
            description: "Adicionando aos Favoritos",
          },
        });



      }}
      ml={5}
      icon={<FaHeart color={favorito ? "red" : "gray"} />} //ativo ? "red" : "gray"
      variant="outline"
      colorScheme="red"
    />
  );
}

export default AdicionarAosFavoritosToast;
