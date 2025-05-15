import { Routes, Route, Navigate } from 'react-router-dom'
import Selector from '@/pages/Selector'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Selector />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to={'/'} replace />}></Route>
    </Routes>
  )
}
