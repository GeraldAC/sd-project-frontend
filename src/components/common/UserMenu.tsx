'use client'

import { useAuth } from '@/hooks/AuthContext'
import {
  Avatar,
  Box,
  Button,
  defineStyle,
  Menu,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const ringCss = defineStyle({
  outlineWidth: '2px',
  outlineColor: 'colorPalette.500',
  outlineOffset: '2px',
  outlineStyle: 'solid',
})

const UserMenu = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <Menu.Root>
      <Menu.Trigger>
        <Avatar.Root
          size={'xl'}
          variant={'solid'}
          colorPalette={'green'}
          css={ringCss}
          _hover={{ transform: 'scale(0.9)', cursor: 'pointer' }}
        >
          <Avatar.Fallback name={user?.name || 'John Doe'} />
        </Avatar.Root>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <VStack alignItems={'initial'} p={'1'}>
            <Box
              _hover={{ textDecor: 'none', layerStyle: 'fill.subtle' }}
              borderRadius="lg"
              px="1"
              py="2"
            >
              <Text fontSize={'md'} mx={'4'}>
                {user?.name || 'John Doe'}
              </Text>
            </Box>
            <Box
              _hover={{ textDecor: 'none', layerStyle: 'fill.subtle' }}
              borderRadius="lg"
              px="1"
              py="2"
            >
              <Text fontSize={'md'} mx={'4'}>
                Rol: {user?.role || 'Cliente'}
              </Text>
            </Box>
            <Button
              rounded={'lg'}
              variant={'outline'}
              colorPalette={'red'}
              onClick={handleLogout}
            >
              Cerrar Sesión
            </Button>
          </VStack>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  )
}

export default UserMenu
