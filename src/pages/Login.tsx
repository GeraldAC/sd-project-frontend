import LoginForm from '@/components/forms/login/LoginForm'
import { Card } from '@chakra-ui/react'

const Login = () => {
  return (
    <Card.Root
      padding={5}
      maxW="450px"
      mx="auto"
      mt={'20'}
      colorPalette={'teal'}
      size={'lg'}
      variant={'elevated'}
    >
      <Card.Header>
        <Card.Title fontSize={'xx-large'}>Inicio de Sesión</Card.Title>
        <Card.Description fontSize={'md'}>
          Emprendimientos locales
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <LoginForm />
      </Card.Body>
    </Card.Root>
  )
}

export default Login
