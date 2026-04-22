import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
import { router } from './routes/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookProvider>
  </StrictMode>,
)
