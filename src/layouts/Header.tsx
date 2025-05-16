import { useAuth } from '@/hooks/AuthContext'
import {
  Box,
  Flex,
  Spacer,
  Button,
  Link,
  Image,
  ButtonGroup,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import UserMenu from '@/components/layout/UserMenu'

const Header = () => {
  const { user, login } = useAuth()
  const location = useLocation()

  const handleLogin = () => {
    login({ name: 'John Doe', role: 'Cliente' })
  }

  return (
    <Box bg="black" px={12} py={3}>
      <Flex align="center" gap={'2'}>
        <LinkBox>
          <LinkOverlay href="/home">
            <Image src={logo} alt="Logo" rounded={'full'} height="50px" />
          </LinkOverlay>
        </LinkBox>
        <Spacer />
        {user ? (
          <UserMenu />
        ) : (
          <>
            {location.pathname == '/home' && (
              <ButtonGroup gap={'2'}>
                <Button
                  colorPalette={'teal'}
                  variant={'ghost'}
                  rounded={'full'}
                  size={'lg'}
                >
                  Sobre Nosotros
                </Button>
                <Button
                  colorPalette={'teal'}
                  variant={'ghost'}
                  rounded={'full'}
                  size={'lg'}
                  onClick={handleLogin}
                >
                  Iniciar
                </Button>
              </ButtonGroup>
            )}
            {location.pathname !== '/login' && (
              <Button
                asChild
                colorPalette={'black'}
                variant={'outline'}
                rounded={'full'}
                size={'lg'}
                borderWidth={'medium'}
                borderColor={'white'}
              >
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
            )}
            {location.pathname !== '/register' && (
              <Button
                asChild
                colorPalette={'black'}
                variant={'solid'}
                rounded={'full'}
                size={'lg'}
              >
                <Link href="/register">Registrarse</Link>
              </Button>
            )}
          </>
        )}
      </Flex>
    </Box>
  )
}

export default Header
