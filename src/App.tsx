import { Route, Routes } from 'react-router-dom'
import { Login } from './features/auth/login'
import Home from './pages/Home'
import { Register } from './features/auth/register'
import { PageSelector } from './pages/page-selector'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PageSelector />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
