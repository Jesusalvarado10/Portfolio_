import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './Pages/Home/home.tsx'
import { homeURL } from './url.ts'
import { Layout } from './Pages/Layout/layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes >
            <Route element={<Layout/>}>
              <Route path={homeURL} element={<Home />}></Route>
              <Route path='/' element={<Navigate to={homeURL} />} /> {/* Redirige automáticamente a /home */}
            </Route>
          </Routes>
        </BrowserRouter>
  </React.StrictMode>,
)
