import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './Routes/Home.jsx'
import Contact from './Routes/Contact.jsx'
import Skills from './Routes/Skills.jsx'
import Projects from './Routes/Projects.jsx'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contato',
        element: <Contact />
      },
      {
        path: '/habilidades',
        element: <Skills />
      },
      {
        path: '/projetos',
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
