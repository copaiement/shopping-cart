import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './pages/Root'
import { Catalog } from './pages/Catalog'
import { ShoppingCart } from './pages/ShoppingCart'
import { ErrorPage } from './pages/ErrorPage'
import { ItemDetail } from './pages/ItemDetail'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "item/:itemId",
        element: <ItemDetail />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
