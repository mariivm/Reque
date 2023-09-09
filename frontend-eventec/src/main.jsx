import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Root from './routes/root'
//import Login from './routes/login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  // {
  //   path: "./routes/login",
  //   element: <Login />,
  // },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
