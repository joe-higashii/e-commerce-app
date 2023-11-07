import React, { useState } from "react";
import { IconButton, useToast } from "@chakra-ui/react";
import { FaHeart } from 'react-icons/fa';
import { api } from "../../api/api";

const AdicionarAosFavoritosToast = ({ produtoId, favorito, produto }) => {
  // Usar o prop de favorito para definir cor inicial
  const initialColor = favorito ? "red" : "gray";

  // useState para as cores modificarem na tela automagicamente
  const [color, setColor] = useState(initialColor);
  const toast = useToast();

  return (
    <IconButton
      onClick={async () => {
        console.log(`atual: ${favorito}, modificado ${!favorito}`)
        // Toggle da cor dependendo do useState
        const newColor = color === "red" ? "gray" : "red";
        setColor(newColor);

        try {
          await api.patch(`/produtos/${produto.id}`, {
            favoritos: !favorito,
          });
          console.log(`produto ${produto.id} status de favorito atualizado para ${produto.favoritos}`);
        } catch (error) {
          console.error(`Erro ao atualizar o favorito do produto ${produto.id}, status atual: ${produto.favoritos}, status requisitado: ${!favorito}:`, error);
        }

        // Nova logica de toast para modificar tipo dependendo da cor do newColor
        // Removido promise e loading state
        toast({
          title: newColor === "red" ? "Adicionado aos Favoritos" : "Removido dos Favoritos",
          status: newColor === "red" ? 'success':'error',
          description: newColor === "red" ? `${produto.nome} adicioado com sucesso!`:`${produto.nome} foi removido dos favoritos`,
          duration: 3000,
        });

      }}
      ml={5}
      icon={<FaHeart color={color} />} //ativo ? "red" : "gray"
      variant="outline"
      colorScheme="red"
    />
  );
}

export default AdicionarAosFavoritosToast;
