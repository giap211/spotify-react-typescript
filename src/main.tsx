// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.scss'
import { ErrorBoundary } from 'react-error-boundary'
import { NotFound } from './components/index.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ErrorBoundary fallback={<NotFound type="wrong" />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
  // {/* </React.StrictMode> */}
)
