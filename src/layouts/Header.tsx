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
import UserMenu from '@/components/common/UserMenu'

const Header = () => {
  const { user, login } = useAuth()
  const location = useLocation()

  const handleLogin = () => {
    login({ name: 'John Doe', role: 'Cliente' })
  }

  return (
    <Box
      position={'sticky'}
      top={'0'}
      zIndex={'sticky'}
      bg={'brand.800'}
      px={12}
      py={3}
    >
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
                  variant={'plain'}
                  color={'white'}
                  rounded={'full'}
                  size={'lg'}
                  _hover={{
                    layerStyle: 'fill.subtle',
                    bgColor: 'orange.100',
                    color: 'orange.700',
                  }}
                >
                  Sobre Nosotros
                </Button>
                <Button
                  variant={'plain'}
                  color={'white'}
                  rounded={'full'}
                  size={'lg'}
                  _hover={{
                    layerStyle: 'fill.subtle',
                    bgColor: 'orange.100',
                    color: 'orange.700',
                  }}
                  onClick={handleLogin}
                >
                  Iniciar
                </Button>
              </ButtonGroup>
            )}
            {location.pathname !== '/login' && (
              <Button
                asChild
                rounded={'full'}
                size={'lg'}
                colorPalette={'orange'}
                variant={'surface'}
              >
                <Link href="/login">Iniciar Sesión</Link>
              </Button>
            )}
            {location.pathname !== '/register' && (
              <Button
                asChild
                colorPalette={'green'}
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
