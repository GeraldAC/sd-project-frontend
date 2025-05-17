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
    <Box bg="white" px={12} py={3}>
      <Flex align="center" gap={'2'}>
        <LinkBox>
          <LinkOverlay href="/">
            <Image src={logo} alt="Logo" rounded={'full'} height="50px" />
          </LinkOverlay>
        </LinkBox>
        <Spacer />
        {user ? (
          <UserMenu />
        ) : (
          <>
            {location.pathname == '/' && (
              <ButtonGroup gap={'2'}>
                <Button
                  colorPalette={'gray'}
                  variant={'ghost'}
                  rounded={'full'}
                  size={'lg'}
                >
                  Sobre Nosotros
                </Button>
                <Button
                  colorPalette={'gray'}
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
                colorPalette={'white'}
                variant={'outline'}
                rounded={'full'}
                size={'lg'}
                borderWidth={'medium'}
                borderColor={'black'}
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
