import Login from '@/features/auth/Login'
import Register from '@/features/auth/Register'
import Home from '@/pages/Home'
import { Routes, Route } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
