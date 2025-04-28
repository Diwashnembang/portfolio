import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {   createHashRouter,  RouterProvider, Outlet } from 'react-router-dom'
import { Projects } from './components/Projects.tsx'
import { Contact } from './components/Contact.tsx'
import { Analytics } from "@vercel/analytics/react"


let router = createHashRouter([
  {
    element: <RootLayout/>,
    children: [
      { path: "/", element: <App /> },
      { path: "/projects", element: <Projects></Projects> },
      { path: "/contact", element: <Contact></Contact> }
    ]
  }
])

function RootLayout() {
  return (
    <>
      <Analytics />
      <Outlet />
    </>
  )
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
