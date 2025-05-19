import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  Button,
  Flex,
  Separator,
} from '@chakra-ui/react'

import cafe from './../assets/cafe-peru.jpg'
import quinua from './../assets/quinua.jpg'

const emprendimiento = {
  nombre: 'EcoAndes Orgánicos',
  ubicacion: 'Ayacucho, Perú',
  descripcion:
    'EcoAndes Orgánicos promueve el cultivo agroecológico de alimentos andinos como la quinua, la kiwicha y el maíz morado. Trabajan con comunidades campesinas y comercializan productos 100% orgánicos.',
  imagen: cafe,
}

const producto = {
  nombre: 'Quinua Real Orgánica',
  descripcion:
    'Quinua blanca cultivada a más de 3,800 msnm sin uso de pesticidas ni fertilizantes químicos. Rica en proteínas, ideal para una alimentación saludable.',
  precio: 'S/ 18.00 x 500g',
  estado: 'Disponible',
  imagen: quinua,
}

const Emprendimientos = () => {
  return (
    <Box maxW="4xl" mx="auto" p={6}>
      {/* Título de la página */}
      <Heading size="2xl" color="orange.500" textAlign="center" mb={8}>
        Emprendimiento
      </Heading>

      {/* Información del emprendimiento */}
      <Stack gap={4} mb={10}>
        <Image
          src={emprendimiento.imagen}
          alt={emprendimiento.nombre}
          borderRadius="xl"
          objectFit="cover"
        />
        <Box>
          <Heading size="lg" color="green.600">
            {emprendimiento.nombre}
          </Heading>
          <Text fontSize="sm" color="gray.500">
            {emprendimiento.ubicacion}
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.600">
          {emprendimiento.descripcion}
        </Text>
      </Stack>

      <Separator borderColor="orange.200" my={6} />

      {/* Producto destacado */}
      <Stack direction={{ base: 'column', md: 'row' }} gap={6} align="center">
        <Image
          src={producto.imagen}
          alt={producto.nombre}
          borderRadius="lg"
          boxSize="250px"
          objectFit="cover"
        />
        <Box flex="1">
          <Heading size="sm" color="green.700">
            {producto.nombre}
          </Heading>
          <Text fontSize="sm" color="gray.600" mt={2}>
            {producto.descripcion}
          </Text>
          <Flex mt={3} justify="space-between" align="center">
            <Text fontWeight="bold" color="orange.500">
              {producto.precio}
            </Text>
            <Badge colorScheme="green" variant="subtle">
              {producto.estado}
            </Badge>
          </Flex>
          <Button mt={4} size="sm" colorScheme="orange" variant="outline">
            Ver más
          </Button>
        </Box>
      </Stack>
    </Box>
  )
}

export default Emprendimientos
