import {
  Box,
  Heading,
  Image,
  Text,
  Stack,
  Button,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import marca from './../assets/cafe-peru.jpg'

const valoraciones = [
  {
    id: 1,
    producto: 'Miel de abeja nativa',
    emprendimiento: 'Dulce Sierra',
    imagen: marca,
    calificacion: 4,
    comentario: 'Producto delicioso, con sabor natural y buena textura.',
  },
  {
    id: 2,
    producto: 'Harina de Kiwicha',
    emprendimiento: 'Andes Vital',
    imagen: marca,
    calificacion: 5,
    comentario: 'Ideal para preparar panqueques, excelente calidad.',
  },
]

const Valoraciones = () => {
  return (
    <Box maxW="5xl" mx="auto" p={6}>
      <Heading size="lg" color="orange.500" mb={8} textAlign="center">
        Valoraciones realizadas
      </Heading>

      <Stack gap={6}>
        {valoraciones.map((v) => (
          <Box
            key={v.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="sm"
            _hover={{ shadow: 'md' }}
          >
            <Stack direction={{ base: 'column', md: 'row' }}>
              <Image
                src={v.imagen}
                alt={v.producto}
                objectFit="cover"
                maxW={{ base: '100%', md: '200px' }}
              />
              <Box p={4} flex="1">
                <Heading size="sm" color="green.600">
                  {v.producto}
                </Heading>
                <Text fontSize="sm" color="gray.500" mb={2}>
                  Emprendimiento: <strong>{v.emprendimiento}</strong>
                </Text>

                {/* Estrellas */}
                <HStack gap={1} mb={2}>
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      as={FaStar}
                      color={i < v.calificacion ? 'orange.400' : 'gray.300'}
                      boxSize={4}
                    />
                  ))}
                </HStack>

                {/* Comentario */}
                <Text fontSize="sm" color="gray.700" mb={4}>
                  {v.comentario}
                </Text>

                {/* Botones */}
                <HStack gap={3}>
                  <Button size="sm" variant="outline" colorScheme="green">
                    Editar
                  </Button>
                  <Button size="sm" variant="outline" colorScheme="orange">
                    Eliminar
                  </Button>
                </HStack>
              </Box>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

export default Valoraciones
