import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './index.css'
import RootLayout from './layout/RootLayout';
import Home from './routes/Home';
import About from './routes/About';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <RootLayout /> } >
      <Route index element={ <Home /> } />
      <Route path='about' element={ <About /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
