import RegisterForm from '@/components/forms/register/RegisterForm'
import Layout from '@/layouts/Layout'
import { Card } from '@chakra-ui/react'

const Register = () => {
  return (
    <Layout>
      <Card.Root variant={'elevated'} maxW="600px" mx="auto" p={'4'}>
        <Card.Header>
          <Card.Title textAlign="center" fontSize={'2xl'}>
            Formulario de Registro
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <RegisterForm />
        </Card.Body>
      </Card.Root>
    </Layout>
  )
}

export default Register
