import LoginForm from '@/components/forms/login/LoginForm'
import Layout from '@/layouts/Layout'
import { Card } from '@chakra-ui/react'

const Login = () => {
  return (
    <Layout>
      <Card.Root
        padding={5}
        maxW="450px"
        mx="auto"
        mt={'12'}
        colorPalette={'orange'}
        size={'lg'}
        variant={'elevated'}
        boxShadow={'xl'}
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
    </Layout>
  )
}

export default Login
