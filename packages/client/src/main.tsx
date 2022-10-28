import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ErrorPage404 from './pages/404'
import ErrorPage500 from './pages/500'
import Forum from './pages/Forum'

import App from './App'
import 'normalize.css'
import './index.module.scss'
import BackgroundLayout from './layouts/BackgroundLayout'
import LoginPage from './pages/LoginPage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/forum" element={<BackgroundLayout><Forum /></BackgroundLayout>} />
        <Route path="/login" element={<BackgroundLayout><LoginPage /></BackgroundLayout>} />
        <Route path="/forum" element={<BackgroundLayout><Forum /></BackgroundLayout>} />
        <Route path="/500" element={<ErrorPage500 />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
