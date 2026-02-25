import React from 'react'
import Home from './pages/Home'
import Login from './components/login'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Signup from './components/Signup'
import MyResultPage from './pages/MyResultPage'

function RequireAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem('authToken'))
  const location = useLocation()

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/results"
        element={
          <RequireAuth>
            <MyResultPage />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default App