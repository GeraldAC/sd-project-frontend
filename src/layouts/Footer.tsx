import { Box, Icon, Text } from '@chakra-ui/react'
import { LuZap } from 'react-icons/lu'

const Footer = () => {
  return (
    <Box py={4} bg="black" textAlign="center">
      <Text fontSize="sm">
        &copy; {new Date().getFullYear()} CuscoOrgánico. Todos los derechos
        reservados.
      </Text>
      <Text fontSize="sm">
        Hecho con
        <Icon boxSize={4} color="teal.500" mx="2">
          <LuZap />
        </Icon>
        EmprendeBro
      </Text>
    </Box>
  )
}

export default Footer
