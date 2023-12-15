import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Index } from '../src/Component/routes/AllRoutes'
import {RouterProvider} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="718908016897-fkpkdlncpjrd1brggnjf27knlgjt41i5.apps.googleusercontent.com">
    <RouterProvider router={Index} />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </GoogleOAuthProvider>;
  </React.StrictMode>
)