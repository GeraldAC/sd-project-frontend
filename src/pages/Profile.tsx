// src/pages/Perfil.tsx
import { useColorModeValue } from '@/components/ui/color-mode'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  Icon,
  Separator,
} from '@chakra-ui/react'
import { FiMail, FiMapPin, FiBookOpen, FiBriefcase } from 'react-icons/fi'

const user = {
  name: 'Juan Pérez',
  email: 'juan.perez@organico.pe',
  location: 'Ayacucho, Perú',
  career: 'Agroindustria Sostenible',
  occupation: 'Fundador de "EcoAndes Orgánicos"',
  bio: 'Emprendedor rural comprometido con la producción de alimentos orgánicos certificados. Promueve prácticas agrícolas sostenibles y el comercio justo en comunidades andinas.',
  avatarUrl: 'https://i.pravatar.cc/150?u=juan.perez',
}

const Perfil = () => {
  return (
    <Box
      maxW="2xl"
      mx="auto"
      bg={useColorModeValue('white', 'gray.50')}
      p={8}
      borderRadius="2xl"
      boxShadow="xl"
    >
      <Stack gap={6}>
        {/* Avatar y Nombre */}
        <Flex direction="column" align="center">
          <Avatar.Root colorPalette={'orange'}>
            <Avatar.Fallback />
          </Avatar.Root>
        </Flex>
        {/* Título */}
        <Heading
          fontWeight="bold"
          fontSize="2xl"
          color="orange.600"
          textAlign="center"
        >
          {user.name}
        </Heading>

        <Separator borderColor="orange.200" />

        {/* Información detallada con íconos */}
        {/* Información detallada con íconos */}
        <Stack gap={3}>
          <HStack>
            <Icon as={FiMail} color="orange.400" />
            <Text fontSize="sm">{user.email}</Text>
          </HStack>
          <HStack>
            <Icon as={FiMapPin} color="orange.400" />
            <Text fontSize="sm">{user.location}</Text>
          </HStack>
          <HStack>
            <Icon as={FiBookOpen} color="orange.400" />
            <Text fontSize="sm">{user.career}</Text>
          </HStack>
          <HStack>
            <Icon as={FiBriefcase} color="orange.400" />
            <Text fontSize="sm">{user.occupation}</Text>
          </HStack>
        </Stack>

        <Separator borderColor="orange.200" />

        {/* Bio */}
        <Box>
          <Text fontSize="sm" color="gray.600">
            {user.bio}
          </Text>
        </Box>

        {/* Botón */}
        <Flex justify="center">
          <Button colorPalette={'orange'} variant="solid">
            Editar perfil
          </Button>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Perfil
