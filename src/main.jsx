import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter,RouterProvider,Route } from 'react-router-dom'


//paginas
import Home from './routes/Home';
import Delivery from './routes/delivery'

const router = createBrowserRouter([
  {
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/new",
        element:<Delivery />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)

