import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage.tsx'
import SecondPage from './SecondPage.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainPage />
    <div className="page-break"></div>
    <SecondPage />
  </React.StrictMode>,
)
