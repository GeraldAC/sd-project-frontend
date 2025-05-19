import Layout from '@/layouts/Layout'
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Avatar,
  Center,
  Image,
  Flex,
  Button,
  Icon,
  Circle,
  Link,
  Card,
} from '@chakra-ui/react'
import { LuGithub } from 'react-icons/lu'

import logo from './../assets/logo.png'
const members = [
  {
    name: 'Rossbel Huaylla Huillca',
    role: 'Diseñador UI/UX',
    img: 'https://via.placeholder.com/150',
    email: '183067@unsaac.edu.pe',
    github: 'https://github.com/pocotu',
  },
  {
    name: 'George Adolfo Conde Padin',
    role: 'Arquitecto de Base de Datos',
    img: 'https://via.placeholder.com/150',
    email: '141664@unsaac.edu.pe',
    github: 'https://github.com/GeorgeConde',
  },
  {
    name: 'Gerald Antonio Cusacani Gonzales',
    role: 'Desarrollador Frontend',
    img: 'https://via.placeholder.com/150',
    email: '200332@unsaac.edu.pe',
    github: 'https://github.com/GeraldAC',
  },
]

export default function About() {
  return (
    <Layout>
      <Box py={5} fontFamily={'revert'}>
        <Container maxW="6xl">
          <VStack gap={'7'}>
            {/* Hero Section */}
            <Card.Root
              textAlign={'center'}
              boxShadow={'xl'}
              rounded={'full'}
              borderInlineWidth={'8px'}
              borderBlockWidth={'0px'}
              borderColor={'green.600'}
            >
              <Card.Header>
                <Heading size="2xl" fontWeight="bold" color={'green.600'}>
                  Cusco Orgánico
                </Heading>
              </Card.Header>
              <Card.Body>
                <Text fontSize="lg" maxW="4xl">
                  En Cusco Orgánico creemos en el poder de los pequeños
                  emprendimientos agronómicos para transformar comunidades.
                  Conectamos a productores locales con clientes mediante una
                  plataforma accesible, gratuita y pensada para el desarrollo
                  rural.
                </Text>
              </Card.Body>
            </Card.Root>

            {/* Objetivo Section */}
            <Card.Root
              textAlign={'center'}
              boxShadow={'xl'}
              rounded={'full'}
              borderInlineWidth={'8px'}
              borderBlockWidth={'0px'}
              borderColor={'green.600'}
            >
              <Card.Header>
                <Heading size="2xl" fontWeight="bold" color={'green.600'}>
                  Nuestro Objetivo
                </Heading>
              </Card.Header>
              <Card.Body>
                <Text fontSize="lg" maxW="4xl">
                  Impulsar la economía agronómica local conectando directamente
                  a los emprendedores rurales con potenciales clientes mediante
                  una plataforma accesible, intuitiva y gratuita.
                  <br />
                  Buscamos digitalizar a pequeños productores, facilitar la
                  difusión de productos orgánicos, fomentar la confianza del
                  consumidor y construir una red sostenible de comercio justo.
                </Text>
              </Card.Body>
            </Card.Root>

            {/* Equipo Section */}
            <Box mt={'4'}>
              <Heading
                color={'green.600'}
                size="2xl"
                fontWeight="bold"
                textAlign="center"
                mb={5}
              >
                Nuestro Equipo
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
                {members.map((member, index) => (
                  <Member key={index} member={member} />
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </Layout>
  )
}

interface MemberData {
  name: string
  role: string
  img: string
  email: string
  github: string
}

interface MemberProps {
  member: MemberData
}

const Member = ({ member }: MemberProps) => {
  const { name, role, img, email, github } = member
  return (
    <Center py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
      >
        <Image h={'120px'} w={'full'} src={logo} fit={'contain'} />
        <Flex justify={'center'} mt={-8}>
          <Avatar.Root
            shape="full"
            size={'2xl'}
            colorPalette={'brand'}
            css={{
              border: '2px solid brown',
            }}
          >
            <Avatar.Fallback name={name} />
            <Avatar.Image src={img} />
          </Avatar.Root>
        </Flex>

        <Box p={6}>
          <VStack gap={4} align={'center'} mb={5} textAlign="center">
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'revert'}>
              {name}
            </Heading>
            <Text color={'gray.800'}>{role}</Text>
          </VStack>

          <VStack justify={'center'} gap={4} align={'center'}>
            <Text fontWeight={600}>{email}</Text>
            <Circle size="10" borderWidth="2px" borderColor={'black'}>
              <Icon size="lg">
                <LuGithub />
              </Icon>
            </Circle>
          </VStack>

          <Button
            asChild
            w={'full'}
            mt={4}
            bg={'orange.600'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            <Link href={github} target="_blank">
              Seguir
            </Link>
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
