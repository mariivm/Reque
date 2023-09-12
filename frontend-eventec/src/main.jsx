import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { AuthProvider } from './context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './router/routes';


const router = createBrowserRouter(routes)




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
