import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Dashboard from '@/pages/Dashboard'
import About from '@/pages/About'
import Profile from '@/pages/Profile'
import Emprendimientos from '@/pages/Emprendimientos'
import Valoraciones from '@/pages/Valoraciones'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="profile" replace />} />
        <Route path="profile" element={<Profile />} />
        <Route path="emprendimientos" element={<Emprendimientos />} />
        <Route path="valoraciones" element={<Valoraciones />} />
      </Route>

      <Route path="*" element={<Navigate to={'/'} replace />}></Route>
    </Routes>
  )
}
