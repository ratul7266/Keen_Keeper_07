import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router'
// import NavBar from './components/shared/navbar/NavBar'
import Banner from './components/shared/navbar/homepage/Banner'
import AllFriend from './components/shared/navbar/homepage/AllFriend'
import { router } from './routes/Routes'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
