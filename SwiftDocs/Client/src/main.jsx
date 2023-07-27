import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import router from './Router.jsx'
import Navbar from './components/Navbar'

const isAuthenticated = true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {!isAuthenticated && <Navbar />}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
