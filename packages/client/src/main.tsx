import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage404 from './pages/404'
import ErrorPage500 from './pages/500'

import App from './App'
import './styles/reset.scss'
import 'normalize.css'
import './index.module.scss'
import LoginPage from './pages/LoginPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/> } />
      <Route path="/login" element={<LoginPage/> } />
      <Route path="/500" element={<ErrorPage500 />} />
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
