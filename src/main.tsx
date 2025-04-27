import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Projects } from './components/Projects.tsx'
import { Contact } from './components/Contact.tsx'


let router = createBrowserRouter([
  { path: "/", element: <App /> },
  {path:"/projects",element:<Projects></Projects>},
  {path:"/contact", element: <Contact></Contact>}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
