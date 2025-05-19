'use client'

import { useAuth } from '@/hooks/AuthContext'
import { Box, Flex, Text, Button, Stack, Spacer, Link } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <Box bgColor={'gray.800'} px={6} py={3} boxShadow="sm">
      <Flex align="center">
        <Text asChild fontWeight="bold" fontSize="xl">
          <Link href="/">AgroEmprende</Link>
        </Text>
        <Spacer />

        <Stack direction="row" gap={'4'} align="center">
          <Link href="/catalog">Catálogo</Link>
          {user ? (
            <>
              <Link href="/dashboard">Mi Panel</Link>
              <Button colorScheme="teal" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">Iniciar sesión</Link>
              <Button asChild colorScheme="teal">
                <Link href="/register">Registrarse</Link>
              </Button>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  )
}

export default Navbar
