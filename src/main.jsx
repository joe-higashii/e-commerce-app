import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import ListaProdutos from './pages/ListaProdutos/ListaProdutos.jsx';
import Carrinho from './pages/Carrinho/Carrinho.jsx';
import Pedidos from './pages/Pedidos/Pedidos.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import Produto from './pages/Produtos/Produto.jsx';
import { UserContext, UserProvider } from './context/UserContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/lista/produtos",
    element: <ListaProdutos />,
  }
  ,
  {
    path: "/produto/:id",
    element: <Produto/>,
  },
  {
    path: "/carrinho/",
    element: <Carrinho/>,
  },
  {
    path: "/pedidos",
    element: <Pedidos/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
       <RouterProvider router={router} />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
